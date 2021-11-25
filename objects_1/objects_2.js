//List of highest peaks: 8000+m above sea level.

const highestPeaks = [
  {
    name: "Chomolungma (Mt.Everest)",
    height: 8848.86,
  },
  {
    name: "K2 (Chhogori)",
    height: 8611,
  },
  {
    name: "Kangchenjunga",
    height: 8586,
  },
  {
    name: "Lhotse",
    height: 8516,
  },
  {
    name: "Makalu",
    height: 8485,
  },
  {
    name: "Cho Oyu",
    height: 8188,
  },
  {
    name: "Dhaulagiri",
    height: 8167,
  },
  {
    name: "Manaslu",
    height: 8163,
  },
  {
    name: "Nanga Parbat",
    height: 8126,
  },
  {
    name: "Annapurna I",
    height: 8091,
  },
  {
    name: "Gasherbrum I",
    height: 8080,
  },
  {
    name: "Broad Peak (Falchan Kangri)",
    height: 8051,
  },
  {
    name: "Gasherbrum II",
    height: 8035,
  },
  {
    name: "Shishapangma",
    height: 8027,
  },
];

console.log(highestPeaks);


/*I want to add a new key,value pair: country: "some value":
although map returns a new array, it's only a shallow copy. 
My new property is added to the elements in the source array as well, 
since they're pointing to the same objects.

If I don't want to modify the elements in the source array, I will need to copy them. 
The simplest option is probably to use the spread operator
*/

function addKeyAndValue(arr, key, value) {
    return arr.map((obj) => ({ ...obj, [key]: value }));
}

const newArray = addKeyAndValue(highestPeaks, 'country', ' ')

console.log(newArray);

///Find Index of desired object, where to put the new value? 
objIndex = newArray.findIndex((obj => obj.name == "Shishapangma"));

console.log(objIndex);


///for Shishapangma, the index is [13], so now I can just target this object and 
/// state what value should be inserted into

newArray[objIndex].country = "VR China";

console.log(newArray);