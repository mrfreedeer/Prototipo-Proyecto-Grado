using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace trouceApi.Models
{
    public partial class trouceContext : DbContext
    {
        public trouceContext()
        {
        }

        public trouceContext(DbContextOptions<trouceContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Categories> Categories { get; set; }
        public virtual DbSet<Services> Services { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("server=localhost;database=trouce;user=root;pwd=qwerty123;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Categories>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasColumnType("mediumtext");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasColumnType("varchar(30)");
            });

            modelBuilder.Entity<Services>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Categories)
                    .HasColumnName("categories")
                    .HasColumnType("mediumtext");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasColumnType("mediumtext");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasColumnType("varchar(30)");

                entity.Property(e => e.Notes)
                    .HasColumnName("notes")
                    .HasColumnType("tinytext");

                entity.Property(e => e.Price)
                    .HasColumnName("price")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Userid)
                    .HasColumnName("userid")
                    .HasColumnType("int(11)");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasColumnType("int(11)");

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasColumnType("tinytext");

                entity.Property(e => e.Businessdescription)
                    .HasColumnName("businessdescription")
                    .HasColumnType("tinytext");

                entity.Property(e => e.Businessname)
                    .HasColumnName("businessname")
                    .HasColumnType("tinytext");

                entity.Property(e => e.Categories)
                    .HasColumnName("categories")
                    .HasColumnType("mediumtext");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasColumnType("varchar(60)");

                entity.Property(e => e.Lastname)
                    .HasColumnName("lastname")
                    .HasColumnType("varchar(30)");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasColumnType("varchar(30)");

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasColumnType("varchar(40)");

                entity.Property(e => e.Phone)
                    .HasColumnName("phone")
                    .HasColumnType("varchar(20)");

                entity.Property(e => e.Usertype)
                    .HasColumnName("usertype")
                    .HasColumnType("int(11)");
            });
        }
    }
}
