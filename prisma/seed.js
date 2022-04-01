const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice'
        }
    });

    console.log('Customer created', createdCustomer);

    // Add your code here

    const createdContact= await prisma.contact.create({
        data: {
            phone:'339-495-4959',
            email:'elvis@elvisco.com',
            customerId: createdCustomer.id
        }
    })
    console.log('Contact created', createdContact)


    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: '1:45pm',
            movieId: 6
        }
    })

    console.log('Screening created', createdScreening)

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'Lord of the Rings',
            runtimesMin: 120,
            screeningId:createdScreening.id
        }
    })
    console.log('Move created', createdMovie)


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
