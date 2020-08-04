const calculateSalesTax = function(salesData, taxRates) {
  let obj = {};
  // loop through array
  for (let company of salesData) {
    let locationTotalSales = 0;
    let locationTaxes = 0;
      if (!obj[company.name]) {
        obj[company.name] = {totalSales: null, totalTaxes: null}
      }
      for (let i = 0; i < company.sales.length; i++) {
        locationTotalSales += company.sales[i];
      }
      taxKeys = Object.keys(taxRates);
      for (let i = 0; i < taxKeys.length; i++) {
        if (company.province === taxKeys[i]) {
          locationTaxes = locationTotalSales * taxRates[taxKeys[i]];
        }
      }
      obj[company.name].totalSales += locationTotalSales;
      obj[company.name].totalTaxes += locationTaxes;
    }
  return obj
  // grab name, put it into new array
  // for taxes, loop through array, check province, then apply taxes to the total for that province
  // grab sales, add it together, put it into totalSales
  // check if name already in object
  // if already in object, get sales and add it together, get taxes and add it together
}

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

console.log(calculateSalesTax(companySalesData, salesTaxRates));