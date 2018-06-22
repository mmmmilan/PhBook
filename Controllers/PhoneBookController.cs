using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PhoneBook.Models;
using System.Web.Http.Description;
using System.Data.Entity;

namespace PhoneBook.Controllers
{
    public class PhoneBookController : ApiController
    {
        PhoneBook21062018ver1Entities db = new PhoneBook21062018ver1Entities();
        //sve
        [HttpGet]
        public List<PhoneBookDT> vratiDatas()
        {
            List<PhoneBookDT> lista = new List<PhoneBookDT>();
            foreach (PhoneBook.Models.PhoneBook kontakt in db.PhoneBook)
            {
                PhoneBookDT kon = new PhoneBookDT()
                {
                    Id = kontakt.Id,
                    Ime = kontakt.Ime,
                    Prezime = kontakt.Prezime,
                    BrojTelefona = kontakt.BrojTelefona
                };
                lista.Add(kon);
            }
            return lista;
        }

        //pretraga prezime || broj
        [HttpGet]
        public List<PhoneBookDT> Jedan(string id)
        {
            List<PhoneBookDT> lista = new List<PhoneBookDT>();
            foreach (PhoneBook.Models.PhoneBook kontakt in db.PhoneBook)
            {
                PhoneBookDT kon = new PhoneBookDT { Id = kontakt.Id, Ime = kontakt.Ime, Prezime = kontakt.Prezime, BrojTelefona = kontakt.BrojTelefona };
                lista.Add(kon);
            }

            List<PhoneBookDT> listaReturn = new List<PhoneBookDT>();
            foreach (PhoneBookDT kon in lista)
            {
                if (kon.Prezime.ToLower().Contains(id.ToLower()) || kon.BrojTelefona.ToString().Contains(id))
                {
                    PhoneBookDT p = new PhoneBookDT();
                    p.Id = kon.Id;
                    p.Ime = kon.Ime;
                    p.Prezime = kon.Prezime;
                    p.BrojTelefona = kon.BrojTelefona;

                    listaReturn.Add(p);
                }
            }
            return listaReturn;
        }


        [HttpPut]
        public int izmeni(PhoneBookDT p)
        {
            if (ModelState.IsValid)
            {
                PhoneBook.Models.PhoneBook novo = db.PhoneBook.Find(p.Id);
                {
                    novo.Ime = p.Ime;
                    novo.Prezime = p.Prezime;
                    novo.BrojTelefona = p.BrojTelefona;
                    try
                    {
                        db.Entry(novo).State = EntityState.Modified;
                        db.SaveChanges();
                        return 1;
                    }
                    catch (Exception)
                    {
                        return 0;
                        throw;
                    }
                }
            }
            return 0;
        }


        [HttpPost]
        public int ubaci(PhoneBookDT p)
        {
            PhoneBook.Models.PhoneBook novo = new Models.PhoneBook();
            {
                novo.Ime = p.Ime;
                novo.Prezime = p.Prezime;
                novo.BrojTelefona = p.BrojTelefona;
            }
            try
            {
                db.PhoneBook.Add(novo);
                //db.PhoneBook.Add(new PhoneBook.Models.PhoneBook{Ime="pera",Prezime="Perkovic3",BrojTelefona=4444 });
                db.SaveChanges();
                return 1;
            }
            catch (Exception)
            {
                return 0;
                throw;
            }
        }

        [HttpDelete]
        public int obrisi(int id) {
            PhoneBook.Models.PhoneBook zaBris = db.PhoneBook.Find(id);
            if (zaBris == null)
            {
                return -1;
            }
            try
            {
                db.PhoneBook.Remove(zaBris);
                db.SaveChanges();
            }
            catch (Exception)
            {
                return -1;
            }
            return 1;
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}
      

