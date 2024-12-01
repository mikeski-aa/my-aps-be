import prisma from "../config/config.js";

async function getApps() {
  try {
    const response = await prisma.application.findMany({
      orderBy: [{ applyDate: "asc" }],
    });

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
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function deleteApp(id) {
  try {
    const response = await prisma.application.delete({
      where: {
        id: +id,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

// update first time when data doesnt exist
async function updateAppDate(id, status) {
  const currentDate = new Date();
  try {
    const response = await prisma.application.update({
      where: {
        id: +id,
      },
      data: {
        endDate: currentDate,
        status: status,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

// fixing if status changed by mistake
async function resetAppDate(id) {
  const newDate = new Date("01-01-0000");
  try {
    const response = await prisma.application.update({
      where: {
        id: +id,
      },
      data: {
        endDate: newDate,
        status: "Applied",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

// change stage without changing the date
async function updateAppStatusOnly(id, status) {
  try {
    const response = await prisma.application.update({
      where: {
        id: +id,
      },
      data: {
        status: status,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export {
  getApps,
  addApp,
  deleteApp,
  updateAppDate,
  resetAppDate,
  updateAppStatusOnly,
};
