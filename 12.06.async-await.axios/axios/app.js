const BASE_URL = `https://northwind.vercel.app/api`;

// axios(`${BASE_URL}/customers`)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // axios.delete(`${BASE_URL}/customers/BERGS`);
// axios.post(`${BASE_URL}/customers/`, { lorem: "ipsum" });

async function getAllData() {
  try {
    const response = await axios(`${BASE_URL}/customers`);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// getAllData();

async function deleteDataById(id) {
  await axios.delete(`${BASE_URL}/customers/${id}`);
}

// deleteDataById("BLAUS");

async function addNewData(obj) {
  await axios.post(`${BASE_URL}/customers`, obj);
}

// addNewData({ city: "Ganja" });

async function updateDataById(id, obj) {
  await axios.patch(`${BASE_URL}/customers/${id}`, obj);
}

// updateDataById("BLONP", { companyName: "code academy" });

//AXIOS INSTANCE

const axiosInstance = axios.create({
  baseURL: "https://northwind.vercel.app/api/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

async function getSuppliers() {
  try {
    let response = await axiosInstance.get("suppliers");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
async function deletSupplierById(id) {
  try {
    await axiosInstance.delete(`suppliers/${id}`);
  } catch (error) {
    console.log(error.message);
  }
}

getSuppliers();

// deletSupplierById(6);
