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
    { name: 'Spock', email: 'spock@enterprise.com', campusId: 1 },
    { name: 'Kirk', email: 'Captain@enterprise.com', campusId: 2 },
    { name: 'Koloth', email: 'koloth@Klingon.com', campusId: 3 },
    { name: 'Dr. Who', email: 'who@tardis.com', campusId: 4 },
    { name: 'Nelix', email: 'nelix@voyager.com', campusId: 1 },
    { name: 'Clary Fairchild', email: 'CFairchild@Shadow.com', campusId: 2 },
    { name: 'Izzy Black', email: 'Iz@Shadow.com', campusId: 3 },
    { name: 'Luke Graywolf', email: 'Luke@Jade.com', campusId: 4 },
    { name: 'Amanda Tapping', email: 'Carter@stargate.gov', campusId: 1 },
    { name: 'Tealc', email: 'tealc@stargate.gov', campusId: 1 }
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
            // db.close();
            return null;
        });
};

main();