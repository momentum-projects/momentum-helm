
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const p1 = await prisma.profile.create({ data: {
        firstName: "Chris",
        lastName: "Athanas",
        title: "Mr",
        experience: ["Chef", "Spiderman"]
    }});
    const p2 = await prisma.profile.create({ data: {
        firstName: "David",
        lastName: "Rasch",
        title: "Mr",
        experience: ["Instructor", "Floor Buffer"]
    }});
    const p3 = await prisma.profile.create({ data: {
        firstName: "Harry",
        lastName: "Stephens",
        title: "Mr",
        experience: ["Detective", "Window Cleaner"]
    }});
    const p4 = await prisma.profile.create({ data: {
        firstName: "Dee",
        lastName: "Meyers",
        title: "Ms",
        experience: ["Yogurt Chef"]
    }});
    await prisma.connection.create({ data: {
        connectedFromId: p1.id,
        connectedToId: p2.id,
    }});
    await prisma.connection.create({ data: {
        connectedFromId: p2.id,
        connectedToId: p3.id,
    }});
    await prisma.connection.create({ data: {
        connectedFromId: p1.id,
        connectedToId: p4.id,
    }});
}


main().then(() => {
    console.log("done");
})