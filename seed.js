const db = require('./db');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');

const campus = [
    { name: 'Vulcan' },
    { name: 'Earth' },
    { name: 'Telaxia' },
    { name: 'Bajor' },
];

const student = [
    { name: 'Spock', email: 'spock@enterprise.com' },
    { name: 'Kirk', email: 'Captain@enterprise.com' },
    { name: 'Koloth', email: 'koloth@Klingon.com' },
    { name: 'Dr. Who', email: 'who@tardis.com' },
    { name: 'Nelix', email: 'nelix@voyager.com' },
    { name: 'Clary Fairchild', email: 'CFairchild@Shadow.com' },
    { name: 'Izzy Black', email: 'Iz@Shadow.com' },
    { name: 'Luke Graywolf', email: 'Luke@Jade.com' },
    { name: 'Amanda Tapping', email: 'Carter@stargate.gov.us' },
    { name: 'Tealc', email: 'tealc@stargate.gov.us' }
];

const seed = () =>
    Promise.all(campus.map(campus => {
        Campus.create(campus)
    }
    )
    )
        .then(() =>
            Promise.all(student.map(student => {
                Student.create(student)
            }
            )
            )
        );

const main = () => {
    console.log('Syncing db...');
    db.sync({ force: true })
        .then(() => {
            console.log('Seeding databse...');
            return seed();
        })
        .catch(err => {
            console.log('Error while seeding');
            console.log(err.stack);
        })
        .then(() => {
            db.close();
            return null;
        });
};

main();