// function getData() {
//   fetch("https://northwind.vercel.app/api/suppliers")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// getData();

const BASE_URL = `https://northwind.vercel.app/api`;
//async vs await

async function getAllData() {
  try {
    const response = await fetch(`${BASE_URL}/customers`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error("error");
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally block");
  }
}

getAllData();

async function getDataById(id) {
  try {
    const response = await fetch(`${BASE_URL}/customers/${id}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// getDataById("BERGS");

async function deleteDataById(id) {
  try {
    await fetch(`${BASE_URL}/customers/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    await fetch(`${BASE_URL}/customers/${id}`, {
      method: "DELETE",
    });
  }
}

async function addNewData(obj) {
  try {
    await fetch(`${BASE_URL}/customers/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  } catch (error) {
    console.log(error);
  }
}

// addNewData({ className: "GWP102" });

// try catch

// try {
// } catch (error) {
// } finally {
// }

// fetch("https://northwind.vercel.app/api/suplliers", {
//   method: "GET",
// }).then((res) => res.json());
