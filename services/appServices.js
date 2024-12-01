import prisma from "../config/config.js";

async function getApps() {
  try {
    const response = await prisma.application.findMany({
      orderBy: [{ applyDate: "asc" }],
    });

    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function addApp(companyName, location) {
  try {
    const response = await prisma.application.create({
      data: {
        companyName: companyName,
        location: location,
        status: "Applied",
      },
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export { getApps, addApp };
