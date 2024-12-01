-- CreateTable
CREATE TABLE "application" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "applyDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "location" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "application_pkey" PRIMARY KEY ("id")
);
