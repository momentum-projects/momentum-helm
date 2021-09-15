/*
  Warnings:

  - You are about to drop the column `leftSideId` on the `Connection` table. All the data in the column will be lost.
  - You are about to drop the column `rightSideId` on the `Connection` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Connection" DROP CONSTRAINT "Connection_leftSideId_fkey";

-- DropForeignKey
ALTER TABLE "Connection" DROP CONSTRAINT "Connection_rightSideId_fkey";

-- AlterTable
ALTER TABLE "Connection" DROP COLUMN "leftSideId",
DROP COLUMN "rightSideId",
ADD COLUMN     "inboundId" INTEGER,
ADD COLUMN     "outboundId" INTEGER;

-- CreateTable
CREATE TABLE "ProfileConnections" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER,
    "connectionId" INTEGER,

    CONSTRAINT "ProfileConnections_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProfileConnections" ADD CONSTRAINT "ProfileConnections_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileConnections" ADD CONSTRAINT "ProfileConnections_connectionId_fkey" FOREIGN KEY ("connectionId") REFERENCES "Connection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
