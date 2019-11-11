using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Cors; 

using Newtonsoft.Json;
using System.Threading.Tasks;
using trouceApi.Models;
using System;

namespace trouceApi.Business
{

    public class SearchBusiness : IDisposable
    {   
        void IDisposable.Dispose()
        {

        }

        private readonly trouceContext _context;

        public SearchBusiness(trouceContext context)
        {
            _context = context;
        }
        public List<Services> search( SearchFilter filter )
        {
            var query = from items in _context.Services select items;

            if (filter.SearchString != null && filter.SearchString != "") {
                query = query.Where(x => x.Name.Trim().Contains(filter.SearchString));
            }

            if (filter.Category != null && filter.Category != "") {
                query = query.Where(x => x.Categories.Trim().Contains(filter.Category));
            }

            return query.ToList();
        }
    }
}