const eta = parseInt(prompt ("Quanti anni hai?"));
const km = parseInt(prompt ("Quanti chilometri devi percorrere?"));
const scontoUnder = 20;
const scontoOver = 40;
const prezzoPerKm = 0.21;
const prezzoBase = km * prezzoPerKm;
let prezzoScontato;
if (eta < 18)
{
  prezzoScontato = prezzoBase * (1 - scontoUnder / 100);
  console.log("il prezzo del biglietto è €", prezzoScontato.toFixed(2));
} else if(eta > 65)
{
  prezzoScontato = prezzoBase * (1 - scontoOver / 100);
  console.log("il prezzo del biglietto è €", prezzoScontato.toFixed(2));
} else 
{
  console.log("il prezzo del biglietto è €", prezzoBase.toFixed(2));
}