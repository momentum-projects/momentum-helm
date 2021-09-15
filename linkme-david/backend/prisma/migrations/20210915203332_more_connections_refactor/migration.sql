/*
  Warnings:

  - The primary key for the `Connection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Connection` table. All the data in the column will be lost.
  - You are about to drop the column `inboundId` on the `Connection` table. All the data in the column will be lost.
  - You are about to drop the column `outboundId` on the `Connection` table. All the data in the column will be lost.
  - You are about to drop the `ProfileConnections` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `connectedFromId` to the `Connection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `connectedToId` to the `Connection` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProfileConnections" DROP CONSTRAINT "ProfileConnections_connectionId_fkey";

-- DropForeignKey
ALTER TABLE "ProfileConnections" DROP CONSTRAINT "ProfileConnections_profileId_fkey";

-- AlterTable
ALTER TABLE "Connection" DROP CONSTRAINT "Connection_pkey",
DROP COLUMN "id",
DROP COLUMN "inboundId",
DROP COLUMN "outboundId",
ADD COLUMN     "connectedFromId" INTEGER NOT NULL,
ADD COLUMN     "connectedToId" INTEGER NOT NULL,
ADD CONSTRAINT "Connection_pkey" PRIMARY KEY ("connectedFromId", "connectedToId");

-- DropTable
DROP TABLE "ProfileConnections";

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_connectedFromId_fkey" FOREIGN KEY ("connectedFromId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_connectedToId_fkey" FOREIGN KEY ("connectedToId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
