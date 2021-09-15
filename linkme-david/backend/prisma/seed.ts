
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    await prisma.profile.create({ data: {
        id: 1,
        firstName: "Chris",
        lastName: "Athanas",
        title: "Mr",
        experience: ["Chef", "Spiderman"]
    }});
    await prisma.profile.create({ data: {
        id: 2,
        firstName: "David",
        lastName: "Rasch",
        title: "Mr",
        experience: ["Instructor", "Floor Buffer"]
    }});
    await prisma.profile.create({ data: {
        id: 3,
        firstName: "Harry",
        lastName: "Stephens",
        title: "Mr",
        experience: ["Detective", "Window Cleaner"]
    }});
    await prisma.profile.create({ data: {
        id: 4,
        firstName: "Dee",
        lastName: "Meyers",
        title: "Ms",
        experience: ["Yogurt Chef"]
    }});
    await prisma.connection.create({ data: {
        leftSideId: 1,
        rightSideId: 2,
    }});
    await prisma.connection.create({ data: {
        leftSideId: 2,
        rightSideId: 3,
    }});
    await prisma.connection.create({ data: {
        leftSideId: 1,
        rightSideId: 4,
    }});
}


main().then(() => {
    console.log("done");
})