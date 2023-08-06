// var express = require('express');
// var path = require('path');
// var logger = require('morgan');
// var bodyParser = require('body-parser');
// var neo4j = require('neo4j-driver');
// var app = express();
// const store = require('store2')

// //text messenger
// const textmagicClient = require('textmagic-client');
// const client = textmagicClient.ApiClient.instance;
// const auth = client.authentications['BasicAuth'];
// const api = new textmagicClient.TextMagicApi();
// auth.username = 'georgepayne';
// auth.password = 'mVFvXyzt67M7i0SEMiSPy5s9dgv3TY';

var neo4j = require('neo4j-driver');
export const connectDriver = async () => {
// (async () => {
  // URI examples: 'neo4j://localhost', 'neo4j+s://xxx.databases.neo4j.io'
  const URI = 'neo4j+s://61c76ce3.databases.neo4j.io'
  const USER = 'neo4j'
  const PASSWORD = 'jtvkGRx3f2MqLczEpGXrPSC4n7IFUGOgM30_P_7JQEM'
  let driver

  try {
    driver = neo4j.driver(URI,  neo4j.auth.basic(USER, PASSWORD))
    const serverInfo = await driver.getServerInfo()
    console.log('Connection established')
    console.log(serverInfo)
  } catch(err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`)
  }
  console.log('driver: ', driver)
  var session = driver.session();

  // session
  	//.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
    // .run('CREATE(a:Member {name: "Ish", gender: "Male" }) RETURN a:Member')
    // .subscribe({
    //   onKeys: keys => {
    //     console.log(keys) // ['name]
    //   },
    //   onNext: record => {
    //     console.log(record.get('name')) // 'Alice'
    //   },
    //   onCompleted: (summary) => {
    //     // `summary` holds the same information as `res.summary`
  
    //     // Close the Session
    //     session.close()
    //   },
    //   onError: error => {
    //     console.log(error)
    //   }
    // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Chit", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // }).then(



  //try variables

    session
    //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
    .run('CREATE(a:Member {name: "Chit", gender: "Male" }) RETURN a:Member',
    'CREATE(a:Member {name: "Vish", gender: "Male" }) RETURN a:Member')
    .subscribe({
      onKeys: keys => {
        console.log(keys) // ['name]
      },
      onNext: record => {
        console.log(record.get('name')) // 'Alice'
      },
      onCompleted: (summary) => {
        // `summary` holds the same information as `res.summary`
  
        // Close the Session
        session.close()
      },
      onError: error => {
        console.log(error)
      }
    })
  // ).then(
  //   session
  //   //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  //   .run('CREATE(a:Member {name: "Vish", gender: "Male" }) RETURN a:Member')
  //   .subscribe({
  //     onKeys: keys => {
  //       console.log(keys) // ['name]
  //     },
  //     onNext: record => {
  //       console.log(record.get('name')) // 'Alice'
  //     },
  //     onCompleted: (summary) => {
  //       // `summary` holds the same information as `res.summary`
  
  //       // Close the Session
  //       session.close()
  //     },
  //     onError: error => {
  //       console.log(error)
  //     }
  //   })
  // )

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Lika", gender: "Female" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Satya", gender: "Female" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Vyan", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Drita", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Jaya", gender: "Female" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Vrita", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Vila", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Jnki", gender: "Female" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Chika", gender: "Female" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Kpila", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Satvy", gender: "Female" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Asva", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Savya", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Krpi", gender: "Female" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Saayan", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Mina", gender: "Female" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Jata", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Driya", gender: "Female" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Mnu", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Lavnya", gender: "Female" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Gru", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Kriya", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })

  // session
  // //.run('CREATE(a:Member {name: "King Shan", gender: "Male" }) RETURN a:Member')
  // .run('CREATE(a:Member {name: "Misa", gender: "Male" }) RETURN a:Member')
  // .subscribe({
  //   onKeys: keys => {
  //     console.log(keys) // ['name]
  //   },
  //   onNext: record => {
  //     console.log(record.get('name')) // 'Alice'
  //   },
  //   onCompleted: (summary) => {
  //     // `summary` holds the same information as `res.summary`

  //     // Close the Session
  //     session.close()
  //   },
  //   onError: error => {
  //     console.log(error)
  //   }
  // })
  
// })();
};

// //View Engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// //Download Excel files
// const excelJS = require("exceljs")

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// var driver = neo4j.driver('neo4j+s://c4bd0fe9.databases.neo4j.io', neo4j.auth.basic('neo4j', 'FSduQW598yVfZz9VTJLPE92nV_NdP_XmMzZAJMqnD5o'));
// var session = driver.session();

// app.post('/logIn', function(req, res){
//   var email = req.body.email;
//   var password = req.body.password;

//   session
//     .run('MATCH(a:User {email: $email, password: $password}) RETURN a', {
//       email: email,
//       password: password
//     })
//     .then(function(result10){
//       result10.records[0] !== undefined && store.session('session', 'loggedIn238928')

//       session
//         .run('MATCH(n:TenantCompany) RETURN n')
//         .then(function(result3){
//           var tenantCompanyArr = [];
//           result3.records.forEach(function(record){
//             tenantCompanyArr.push({
//               id: record._fields[0].identity.low,
//               tenantCompany: record._fields[0].properties.tenantCompany,
//               tenantCompanyMobile: record._fields[0].properties.tenantCompanyMobile,
//               tenantCompanyEmail: record._fields[0].properties.tenantCompanyEmail,
//               tenantCompanyLandline: record._fields[0].properties.tenantCompanyLandline,
//               tenantCompanyFacimile: record._fields[0].properties.tenantCompanyFacimile,
//               tenantCompanyAddress: record._fields[0].properties.tenantCompanyAddress,
//               tenantCompanyWebsite: record._fields[0].properties.tenantCompanyWebsite,
//               randomIdentifier: record._fields[0].properties.randomIdentifier
//             });
//           });
//           if (store.session('session') === 'loggedIn238928') {
//             res.render('index', {
//               tenantCompanies: tenantCompanyArr
//             });
//           } else {
//             res.render('logIn', {
//               tenantCompanies: tenantCompanyArr
//             });
//           }
//         })
//     })
//     .catch(function(error){
//       console.log(error);
//     });
//   //.then(() => session.close());
// })

// //Logout
// app.get('/logOut', function(req, res){
//   store.session(false)
//   session
//     .run('MATCH(n:TenantCompany) RETURN n')
//     .then(function(result3){
//       var tenantCompanyArr = [];
//       result3.records.forEach(function(record){
//         tenantCompanyArr.push({
//           id: record._fields[0].identity.low,
//           tenantCompany: record._fields[0].properties.tenantCompany,
//           tenantCompanyMobile: record._fields[0].properties.tenantCompanyMobile,
//           tenantCompanyEmail: record._fields[0].properties.tenantCompanyEmail,
//           tenantCompanyLandline: record._fields[0].properties.tenantCompanyLandline,
//           tenantCompanyFacimile: record._fields[0].properties.tenantCompanyFacimile,
//           tenantCompanyAddress: record._fields[0].properties.tenantCompanyAddress,
//           tenantCompanyWebsite: record._fields[0].properties.tenantCompanyWebsite,
//           randomIdentifier: record._fields[0].properties.randomIdentifier
//         });
//       });
//       if (store.session('session') === 'loggedIn238928') {
//         res.render('index', {
//           tenantCompanies: tenantCompanyArr
//         });
//       } else {
//         res.render('logIn', {
//           tenantCompanies: tenantCompanyArr
//         });
//       }
//     })
//     .catch(function(error){
//       console.log(error);
//     });
//   //.then(() => session.close());
// });

// //Home page render with dropdown of tenant companies and links to add new and add tenants:
// app.get('/', function(req, res){
//   session
//     .run('MATCH(n:TenantCompany) RETURN n')
//     .then(function(result3){
//       var tenantCompanyArr = [];
//       result3.records.forEach(function(record){
//         tenantCompanyArr.push({
//           id: record._fields[0].identity.low,
//           tenantCompany: record._fields[0].properties.tenantCompany,
//           tenantCompanyMobile: record._fields[0].properties.tenantCompanyMobile,
//           tenantCompanyEmail: record._fields[0].properties.tenantCompanyEmail,
//           tenantCompanyLandline: record._fields[0].properties.tenantCompanyLandline,
//           tenantCompanyFacimile: record._fields[0].properties.tenantCompanyFacimile,
//           tenantCompanyAddress: record._fields[0].properties.tenantCompanyAddress,
//           tenantCompanyWebsite: record._fields[0].properties.tenantCompanyWebsite,
//           randomIdentifier: record._fields[0].properties.randomIdentifier
//         });
//       });
//       if (store.session('session') === 'loggedIn238928') {
//         res.render('index', {
//           tenantCompanies: tenantCompanyArr
//         });
//       } else {
//         res.render('logIn', {
//           tenantCompanies: tenantCompanyArr
//         });
//       }
//     })
//     .catch(function(error){
//       console.log(error);
//     });
//   //.then(() => session.close());
// });

// app.post('/sendSMS', function(req, res){
//   var receiver = req.body.receiver;
//   var mobileNumber = req.body.mobileNumber;

//   const now1 = new Date()
//   const currentDate = now1.toLocaleString("en-US", {timeZone: "Australia/Sydney"})
//   const currentYear = currentDate.slice(5,9)
//   const currentMonthPending = currentDate.slice(0,2)
//   const currentMonth = currentMonthPending.slice(1,2) === '/' ? currentMonthPending.slice(0,1) : currentMonthPending
//   const currentDayPending = currentDate.slice(2,4)
//   const currentDay = currentDayPending.slice(3,4) === '/' ? currentDayPending.slice(2,3) : currentDayPending
//   const currentHourPending = now1.getHours()
//   const currentMinutes = now1.getMinutes()
//   const correctHour = currentMinutes > 54 ? currentHourPending + 1 : currentHourPending
//   const currentSeconds = now1.getSeconds()
//   //doesn't handle for midnight hour for this example
//   const scheduledText = currentMinutes < 55 ? currentMinutes + 5 : (currentMinutes + 5) - 60

//   const formatDate = (
//     currentYear,
//     currentMonth,
//     currentDay,
//     correctHour,
//     scheduledText,
//     currentSeconds) => {
//       let formattedDate
//       if (scheduledText < 10 && currentMonth.length === 2 && currentDay.length === 2) {
//         formattedDate = `${currentYear}-${currentMonth}-${currentDay} ${correctHour}:0${scheduledText}:${currentSeconds}`
//       }
//       if (scheduledText > 9 && currentMonth.length === 2 && currentDay.length === 2) {
//         formattedDate = `${currentYear}-${currentMonth}-${currentDay} ${correctHour}:${scheduledText}:${currentSeconds}`
//       }
//       if (scheduledText < 10 && currentMonth.length === 1 && currentDay.length === 2) {
//         formattedDate = `${currentYear}-0${currentMonth}-${currentDay} ${correctHour}:0${scheduledText}:${currentSeconds}`
//       }
//       if (scheduledText > 9 && currentMonth.length === 1 && currentDay.length === 2) {
//         formattedDate = `${currentYear}-0${currentMonth}-${currentDay} ${correctHour}:${scheduledText}:${currentSeconds}`
//       }
//       if (scheduledText < 10 && currentMonth.length === 2 && currentDay.length === 1) {
//         formattedDate = `${currentYear}-${currentMonth}-0${currentDay} ${correctHour}:0${scheduledText}:${currentSeconds}`
//       }
//       if (scheduledText > 9 && currentMonth.length === 2 && currentDay.length === 1) {
//         formattedDate = `${currentYear}-${currentMonth}-0${currentDay} ${correctHour}:${scheduledText}:${currentSeconds}`
//       }
//       if (scheduledText < 10 && currentMonth.length === 1 && currentDay.length === 1) {
//         formattedDate = `${currentYear}-0${currentMonth}-0${currentDay} ${correctHour}:0${scheduledText}:${currentSeconds}`
//       }
//       if (scheduledText > 9 && currentMonth.length === 1 && currentDay.length === 1) {
//         formattedDate = `${currentYear}-0${currentMonth}-0${currentDay} ${correctHour}:${scheduledText}:${currentSeconds}`
//       }
//       return formattedDate
//   }

//   const formattedDate = formatDate(
//     currentYear,
//     currentMonth,
//     currentDay,
//     correctHour,
//     scheduledText,
//     currentSeconds
//   )

//   const input = {
//       text: `Hello, ${receiver}. Thanks for trying Mighty Apps.`,
//       phones: `${mobileNumber}`, //"61409329960",
//       sendingDateTime: `${formattedDate}`, //"2022-07-16 16:40:33",
//       sendingTimezone: "Australia/Sydney"
//   }


//   api.sendMessage(input).then(function (data) {
//       console.log(data);
//   }).catch(function(err){
//       console.error(err);
//   });

//   session
//     .run('MATCH(n:TenantCompany) RETURN n')
//     .then(function(result3){

//       var tenantCompanyArr = [];
//       result3.records.forEach(function(record){
//         tenantCompanyArr.push({
//           id: record._fields[0].identity.low,
//           tenantCompany: record._fields[0].properties.tenantCompany,
//           tenantCompanyMobile: record._fields[0].properties.tenantCompanyMobile,
//           tenantCompanyEmail: record._fields[0].properties.tenantCompanyEmail,
//           tenantCompanyLandline: record._fields[0].properties.tenantCompanyLandline,
//           tenantCompanyFacimile: record._fields[0].properties.tenantCompanyFacimile,
//           tenantCompanyAddress: record._fields[0].properties.tenantCompanyAddress,
//           tenantCompanyWebsite: record._fields[0].properties.tenantCompanyWebsite,
//           randomIdentifier: record._fields[0].properties.randomIdentifier
//         });
//       });
//       if (store.session('session') === 'loggedIn238928') {
//         res.render('index', {
//           tenantCompanies: tenantCompanyArr
//         });
//       } else {
//         res.render('logIn', {
//           tenantCompanies: tenantCompanyArr
//         });
//       }
//     })
//     .catch(function(error){
//       console.log(error);
//     });
//   //.then(() => session.close());
// });

// //tenant company add new page render:
// app.get('/tenantCompanyForm', function(req, res){
//   session
//     .run('MATCH(n:TenantCompany) RETURN n')
//     .then(function(result3){
//       var tenantCompanyArr = [];
//       result3.records.forEach(function(record){
//         tenantCompanyArr.push({
//           id: record._fields[0].identity.low,
//           tenantCompany: record._fields[0].properties.tenantCompany,
//           tenantCompanyMobile: record._fields[0].properties.tenantCompanyMobile,
//           tenantCompanyEmail: record._fields[0].properties.tenantCompanyEmail,
//           tenantCompanyLandline: record._fields[0].properties.tenantCompanyLandline,
//           tenantCompanyFacimile: record._fields[0].properties.tenantCompanyFacimile,
//           tenantCompanyAddress: record._fields[0].properties.tenantCompanyAddress,
//           tenantCompanyWebsite: record._fields[0].properties.tenantCompanyWebsite,
//           randomIdentifier: record._fields[0].properties.randomIdentifier
//         });
//       });
//       if (store.session('session') === 'loggedIn238928') {
//         res.render('tenantCompanyForm', {
//           tenantCompanies: tenantCompanyArr
//         });
//       } else {
//         res.render('logIn', {
//           tenantCompanies: tenantCompanyArr
//         });
//       }
//     })
//     .catch(function(error){
//       console.log(error);
//     });
//   //.then(() => session.close());
// })

// //tenant company add new page add form Post:
// app.post('/tenantCompanyAdd', function(req, res){
//   var tenantCompany = req.body.tenantCompany;
//   var tenantCompanyMobile = req.body.tenantCompanyMobile;
//   var tenantCompanyEmail = req.body.tenantCompanyEmail;
//   var tenantCompanyLandline = req.body.tenantCompanyLandline;
//   var tenantCompanyFacimile = req.body.tenantCompanyFacimile;
//   var tenantCompanyAddress = req.body.tenantCompanyAddress;
//   var tenantCompanyWebsite = req.body.tenantCompanyWebsite;
//   var randomIdentifier = Math.round(Math.random() * 3000000);

//   session
//     .run(
//       'CREATE(n:TenantCompany {tenantCompany: $tenantCompany, tenantCompanyMobile: $tenantCompanyMobile, tenantCompanyEmail: $tenantCompanyEmail, tenantCompanyLandline: $tenantCompanyLandline, tenantCompanyFacimile: $tenantCompanyFacimile, tenantCompanyAddress: $tenantCompanyAddress, tenantCompanyWebsite: $tenantCompanyWebsite, randomIdentifier: $randomIdentifier}) RETURN n:tenantCompany',
//       {
//           tenantCompany: tenantCompany,
//           tenantCompanyMobile: tenantCompanyMobile,
//           tenantCompanyEmail: tenantCompanyEmail,
//           tenantCompanyLandline: tenantCompanyLandline,
//           tenantCompanyFacimile: tenantCompanyFacimile,
//           tenantCompanyAddress: tenantCompanyAddress,
//           tenantCompanyWebsite: tenantCompanyWebsite,
//           randomIdentifier: neo4j.int(randomIdentifier)
//       })
//     .then(function(result){
//       session
//         .run('MATCH(n:TenantCompany) RETURN n')
//         .then(function(result3){
//           var tenantCompanyArr = [];
//           result3.records.forEach(function(record){
//             tenantCompanyArr.push({
//               id: record._fields[0].identity.low,
//               tenantCompany: record._fields[0].properties.tenantCompany,
//               tenantCompanyMobile: record._fields[0].properties.tenantCompanyMobile,
//               tenantCompanyEmail: record._fields[0].properties.tenantCompanyEmail,
//               tenantCompanyLandline: record._fields[0].properties.tenantCompanyLandline,
//               tenantCompanyFacimile: record._fields[0].properties.tenantCompanyFacimile,
//               tenantCompanyAddress: record._fields[0].properties.tenantCompanyAddress,
//               tenantCompanyWebsite: record._fields[0].properties.tenantCompanyWebsite,
//               randomIdentifier: record._fields[0].properties.randomIdentifier
//             });
//           });
//           if (store.session('session') === 'loggedIn238928') {
//             res.render('tenantCompanyForm', {
//               tenantCompanies: tenantCompanyArr
//             });
//           } else {
//             res.render('logIn', {
//               tenantCompanies: tenantCompanyArr
//             });
//           }
//         })
//       })
//     .catch(function(error){
//       console.log(error)
//     });
//     //.then(() => session.close());
//     //session.close();
// });

// //tenant company add new page update form Post:
// app.post('/tenantCompanyUpdate', function(req, res){
//   var tenantCompany = req.body.tenantCompany;
//   var tenantCompanyMobile = req.body.tenantCompanyMobile;
//   var tenantCompanyEmail = req.body.tenantCompanyEmail;
//   var tenantCompanyLandline = req.body.tenantCompanyLandline;
//   var tenantCompanyFacimile = req.body.tenantCompanyFacimile;
//   var tenantCompanyAddress = req.body.tenantCompanyAddress;
//   var tenantCompanyWebsite = req.body.tenantCompanyWebsite;

//   session
//     .run(
//       'MATCH(a:TenantCompany {tenantCompany: $tenantCompany}) ' +
//       'SET a.tenantCompanyMobile = $tenantCompanyMobile ' +
//       'SET a.tenantCompanyEmail = $tenantCompanyEmail ' +
//       'SET a.tenantCompanyLandline = $tenantCompanyLandline ' +
//       'SET a.tenantCompanyFacimile = $tenantCompanyFacimile ' +
//       'SET a.tenantCompanyAddress = $tenantCompanyAddress ' +
//       'SET a.tenantCompanyWebsite = $tenantCompanyWebsite ' +
//       'RETURN a',
//       {
//           tenantCompany: tenantCompany,
//           tenantCompanyMobile: tenantCompanyMobile,
//           tenantCompanyEmail: tenantCompanyEmail,
//           tenantCompanyLandline: tenantCompanyLandline,
//           tenantCompanyFacimile: tenantCompanyFacimile,
//           tenantCompanyAddress: tenantCompanyAddress,
//           tenantCompanyWebsite: tenantCompanyWebsite
//       })
//     .then(function(){
//       session
//         .run('MATCH(n:TenantCompany) RETURN n')
//         .then(function(result3){
//           var tenantCompanyArr = [];
//           result3.records.forEach(function(record){
//             tenantCompanyArr.push({
//               id: record._fields[0].identity.low,
//               tenantCompany: record._fields[0].properties.tenantCompany,
//               tenantCompanyMobile: record._fields[0].properties.tenantCompanyMobile,
//               tenantCompanyEmail: record._fields[0].properties.tenantCompanyEmail,
//               tenantCompanyLandline: record._fields[0].properties.tenantCompanyLandline,
//               tenantCompanyFacimile: record._fields[0].properties.tenantCompanyFacimile,
//               tenantCompanyAddress: record._fields[0].properties.tenantCompanyAddress,
//               tenantCompanyWebsite: record._fields[0].properties.tenantCompanyWebsite,
//               randomIdentifier: record._fields[0].properties.randomIdentifier
//             });
//           });
//           if (store.session('session') === 'loggedIn238928') {
//             res.render('tenantCompanyForm', {
//               tenantCompanies: tenantCompanyArr
//             });
//           } else {
//             res.render('logIn', {
//               tenantCompanies: tenantCompanyArr
//             });
//           }
//         })
//       })
//     .catch(function(error){
//       console.log(error)
//     });
//     //.then(() => session.close());
//     //session.close();
// });

// //Tenants page render:
// app.get('/tenants', function(req, res){
//   session
//     .run('MATCH(n:Tenant) RETURN n')
//     .then(function(result){
//       var tenantArr = [];
//       result.records.forEach(function(record){
//         tenantArr.push({
//           id: record._fields[0].identity.low,
//           tenant: record._fields[0].properties.tenant,
//           tenantMobile: record._fields[0].properties.tenantMobile,
//           tenantEmail: record._fields[0].properties.tenantEmail,
//           tenantNotes: record._fields[0].properties.tenantNotes,
//           randomIdentifier: record._fields[0].properties.randomIdentifier
//         });
//       });
//       if (store.session('session') === 'loggedIn238928') {
//         res.render('tenants', {
//           tenants: tenantArr
//         });
//       } else {
//         res.render('logIn', {
//           tenants: tenantArr
//         });
//       }
//     })
// });

// //Tenants add form Post on tenant page:
// app.post('/tenantAdd', function(req, res){
//   var tenant = req.body.tenant;
//   var tenantMobile = req.body.tenantMobile;
//   var tenantEmail = req.body.tenantEmail;
//   var tenantNotes = req.body.tenantNotes;
//   var randomIdentifier = Math.round(Math.random() * 3000000);

//   session
//     .run(
//       'CREATE(n:Tenant {tenant: $tenant, tenantMobile: $tenantMobile, tenantEmail: $tenantEmail, tenantNotes: $tenantNotes, randomIdentifier: $randomIdentifier}) RETURN n:tenant',
//       {
//           tenant: tenant,
//           tenantMobile: tenantMobile,
//           tenantEmail: tenantEmail,
//           tenantNotes: tenantNotes,
//           randomIdentifier: neo4j.int(randomIdentifier)
//       })
//     .then(function(){
//       if (store.session('session') === 'loggedIn238928') {
//         res.redirect('/tenants')
//       } else {
//         res.redirect('/logIn')
//       }
//     })
//     .catch(function(error){
//       console.log(error)
//     });
//     //.then(() => session.close());
//     //session.close();
// });

// //Tenants update form Post on tenant page:
// app.post('/tenantUpdate', function(req, res){
//   var tenant = req.body.tenant;
//   var tenantMobile = req.body.tenantMobile;
//   var tenantEmail = req.body.tenantEmail;
//   var tenantNotes = req.body.tenantNotes;
//   var randomIdentifier = req.body.randomIdentifier;

//   session
//     .run(
//       'MATCH(a:Tenant {tenant: $tenant}) ' +
//       'SET a.tenantMobile = $tenantMobile ' +
//       'SET a.tenantEmail = $tenantEmail ' +
//       'SET a.tenantNotes = $tenantNotes ' +
//       'RETURN a',
//       {
//           tenant: tenant,
//           tenantMobile: tenantMobile,
//           tenantEmail: tenantEmail,
//           tenantNotes: tenantNotes,
//           randomIdentifier: randomIdentifier
//       })
//     .then(function(){
//       if (store.session('session') === 'loggedIn238928') {
//         res.redirect('/tenants')
//       } else {
//         res.redirect('/logIn')
//       }
//     })
//     .catch(function(error){
//       console.log(error)
//     });
//     //.then(() => session.close());
//     //session.close();
// });

// //Tenant Company page render:
// app.post('/tenantCompanyProperties', function(req, res){
//   var tenantCompany = req.body.tenantCompany;

//   session
//     .run('MATCH(n:TenantCompany {tenantCompany: $tenantCompany}) RETURN n', {
//       tenantCompany: tenantCompany
//     })
//     .then(function(result3){
//       var tenantCompanyArr = [];
//       result3.records.forEach(function(record){
//         tenantCompanyArr.push({
//           id: record._fields[0].identity.low,
//           tenantCompany: record._fields[0].properties.tenantCompany,
//           tenantCompanyMobile: record._fields[0].properties.tenantCompanyMobile,
//           tenantCompanyEmail: record._fields[0].properties.tenantCompanyEmail,
//           tenantCompanyLandline: record._fields[0].properties.tenantCompanyLandline,
//           tenantCompanyFacimile: record._fields[0].properties.tenantCompanyFacimile,
//           tenantCompanyAddress: record._fields[0].properties.tenantCompanyAddress,
//           tenantCompanyWebsite: record._fields[0].properties.tenantCompanyWebsite,
//           randomIdentifier: record._fields[0].properties.randomIdentifier
//         });
//       });

//       session
//         .run(
//           'MATCH (tenantCompany:TenantCompany {tenantCompany: $tenantCompany})-[:MANAGES]->(property:Property) RETURN property', {
//             tenantCompany: tenantCompany
//           }
//         )
//         .then(function(resultProperties){
//           var tenantCompanyPropertiesArr = [];
//           resultProperties.records.forEach(function(record){
//             tenantCompanyPropertiesArr.push({
//               id: record._fields[0].identity.low,
//               propertyAddress: record._fields[0].properties.propertyAddress,
//               propertyOwner: record._fields[0].properties.propertyOwner,
//               tenantCompany: record._fields[0].properties.tenantCompany,
//               propertyPreviousOwner: record._fields[0].properties.propertyPreviousOwner,
//               propertyCleaners: record._fields[0].properties.propertyCleaners,
//               propertyMaintenance: record._fields[0].properties.propertyMaintenance,
//               propertyEventsNotes: record._fields[0].properties.propertyEventsNotes,
//               propertyBuildingType: record._fields[0].properties.propertyBuildingType,
//               randomIdentifier: record._fields[0].properties.randomIdentifier
//             });
//         })
//         if (store.session('session') === 'loggedIn238928') {
//           res.render('tenantCompanyProperties', {
//             tenantCompanyProperties: tenantCompanyPropertiesArr,
//             tenantCompanyArr: tenantCompanyArr,
//             tenantCompany: tenantCompany
//           });
//         } else {
//           res.render('logIn', {
//             tenantCompanyProperties: tenantCompanyPropertiesArr,
//             tenantCompanyArr: tenantCompanyArr,
//             tenantCompany: tenantCompany
//           });
//         }
//       });
//     })
//     .catch(function(error){
//         console.log(error);
//     })
// });

// //property add form Post on property page:
// app.post('/propertyAdd', function(req, res){
//   var propertyAddress = req.body.propertyAddress;
//   var propertyOwner = req.body.propertyOwner;
//   var tenantCompany = req.body.tenantCompany;
//   var propertyPreviousOwner = req.body.propertyPreviousOwner;
//   var propertyRentalsTotal = req.body.propertyRentalsTotal;
//   var propertyCleaners = req.body.propertyCleaners;
//   var propertyMaintenance = req.body.propertyMaintenance;
//   var propertyEventsNotes = req.body.propertyEventsNotes;
//   var propertyBuildingType = req.body.propertyBuildingType;
//   var randomIdentifier = Math.round(Math.random() * 3000000);

//   session
//     .run(
//       'CREATE(n:Property {propertyAddress: $propertyAddress, tenantCompany: $tenantCompany, propertyRentalsTotal: $propertyRentalsTotal, propertyOwner: $propertyOwner, propertyPreviousOwner: $propertyPreviousOwner, propertyCleaners: $propertyCleaners, propertyMaintenance: $propertyMaintenance, propertyEventsNotes: $propertyEventsNotes, propertyBuildingType: $propertyBuildingType, randomIdentifier: $randomIdentifier}) RETURN n:Property',
//       {
//           propertyAddress: propertyAddress,
//           propertyOwner: propertyOwner,
//           tenantCompany: tenantCompany,
//           propertyRentalsTotal: propertyRentalsTotal,
//           propertyPreviousOwner: propertyPreviousOwner,
//           propertyCleaners: propertyCleaners,
//           propertyMaintenance: propertyMaintenance,
//           propertyEventsNotes: propertyEventsNotes,
//           propertyBuildingType: propertyBuildingType,
//           randomIdentifier: neo4j.int(randomIdentifier)
//       })
//     .then(function(result){
//       session
//         .run(
//           'MATCH(a:TenantCompany {tenantCompany: $tenantCompany}) ' +
//           'MATCH(b:Property {randomIdentifier: $randomIdentifier}) ' +
//           'CREATE (a)-[:MANAGES]->(b)',
//           {
//               tenantCompany: tenantCompany,
//               randomIdentifier: randomIdentifier
//           })
//           .then(function(result){
//             session
//               .run(
//                 'MATCH (tenantCompany:TenantCompany {tenantCompany: $tenantCompany})-[:MANAGES]->(property:Property) RETURN property', {
//                   tenantCompany: tenantCompany
//                 }
//               )
//               .then(function(resultProperties){
//                 var tenantCompanyPropertiesArr = [];
//                 resultProperties.records.forEach(function(record){
//                   tenantCompanyPropertiesArr.push({
//                     id: record._fields[0].identity.low,
//                     propertyAddress: propertyAddress,
//                     propertyOwner: propertyOwner,
//                     tenantCompany: tenantCompany,
//                     propertyPreviousOwner: propertyPreviousOwner,
//                     propertyCleaners: propertyCleaners,
//                     propertyMaintenance: propertyMaintenance,
//                     propertyEventsNotes: propertyEventsNotes,
//                     propertyBuildingType: propertyBuildingType,
//                     randomIdentifier: randomIdentifier
//                   });
//               })

//               session
//                 .run('MATCH(n:TenantCompany {tenantCompany: $tenantCompany}) RETURN n', {
//                   tenantCompany: tenantCompany
//                 })
//                 .then(function(result3){
//                   var tenantCompanyArr = [];
//                   result3.records.forEach(function(record){
//                     tenantCompanyArr.push({
//                       id: record._fields[0].identity.low,
//                       tenantCompany: record._fields[0].properties.tenantCompany,
//                       tenantCompanyMobile: record._fields[0].properties.tenantCompanyMobile,
//                       tenantCompanyEmail: record._fields[0].properties.tenantCompanyEmail,
//                       tenantCompanyLandline: record._fields[0].properties.tenantCompanyLandline,
//                       tenantCompanyFacimile: record._fields[0].properties.tenantCompanyFacimile,
//                       tenantCompanyAddress: record._fields[0].properties.tenantCompanyAddress,
//                       tenantCompanyWebsite: record._fields[0].properties.tenantCompanyWebsite
//                     });
//                   });
//               if (store.session('session') === 'loggedIn238928') {
//                 res.render('tenantCompanyProperties', {
//                   tenantCompanyProperties: tenantCompanyPropertiesArr,
//                   tenantCompanyArr: tenantCompanyArr
//                 });
//               } else {
//                 res.render('logIn', {
//                   tenantCompanyProperties: tenantCompanyPropertiesArr,
//                   tenantCompanyArr: tenantCompanyArr
//                 });
//               }
//             });
//           });
//       });
//     })
//     .catch(function(error){
//       console.log(error)
//     });
//     //.then(() => session.close());
//     //session.close();
// });

// //property page render:
// app.post('/propertyGetRooms', function(req, res){
//   var propertyAddress = req.body.propertyAddress;
//   var tenantCompany = req.body.tenantCompany;

//   session
//     .run('MATCH (room:Room)-[:IN_BUILDING]->(property:Property {propertyAddress: $propertyAddress}) RETURN room', {
//       propertyAddress: propertyAddress
//     })

//     .then(function(result6){
//       var propertyRoomArr = [];
//       result6.records.forEach(function(record){
//         propertyRoomArr.push({
//           id: record._fields[0].identity.low,
//           roomNumber: record._fields[0].properties.roomNumber,
//           propertyAddress: record._fields[0].properties.propertyAddress,
//           tenant: record._fields[0].properties.tenant,
//           tenantStartDate: record._fields[0].properties.tenantStartDate,
//           tenantEndDate: record._fields[0].properties.tenantEndDate,
//           propertyManager: record._fields[0].properties.propertyManager,
//           propertyOwner: record._fields[0].properties.propertyOwner,
//           leaseCompany: record._fields[0].properties.leaseCompany,
//           rentalPrice: record._fields[0].properties.rentalPrice,
//           priceStartDate: record._fields[0].properties.priceStartDate,
//           previousTenant: record._fields[0].properties.previousTenant,
//           randomIdentifier: record._fields[0].properties.randomIdentifier
//         });
//       });

//         session
//           .run('MATCH (r:Room) RETURN r')
//           .then(function(result2){
//             var allRoomsArray = []
//             result2.records.forEach(function(record){
//               allRoomsArray.push({
//                 id: record._fields[0].identity.low,
//                 roomNumber: record._fields[0].properties.roomNumber,
//                 propertyAddress: record._fields[0].properties.propertyAddress,
//                 tenant: record._fields[0].properties.tenant,
//                 tenantStartDate: record._fields[0].properties.tenantStartDate,
//                 tenantEndDate: record._fields[0].properties.tenantEndDate,
//                 propertyManager: record._fields[0].properties.propertyManager,
//                 propertyOwner: record._fields[0].properties.propertyOwner,
//                 leaseCompany: record._fields[0].properties.leaseCompany,
//                 rentalPrice: record._fields[0].properties.rentalPrice,
//                 priceStartDate: record._fields[0].properties.priceStartDate,
//                 previousTenant: record._fields[0].properties.previousTenant,
//                 randomIdentifier: record._fields[0].properties.randomIdentifier
//               })
//             });

//             session
//               .run('MATCH (tenants:Tenant) RETURN tenants')
//               .then(function(result3){
//                 var tenantsArr = []
//                 result3.records.forEach(function(record){
//                   tenantsArr.push({
//                     id: record._fields[0].identity.low,
//                     tenant: record._fields[0].properties.tenant,
//                     tenantMobile: record._fields[0].properties.tenantMobile,
//                     tenantEmail: record._fields[0].properties.tenantEmail,
//                     tenantNotes: record._fields[0].properties.tenantNotes,
//                     randomIdentifier: record._fields[0].properties.randomIdentifier
//                   });
//                 });

//                 session
//                   .run('MATCH (property:Property {propertyAddress: $propertyAddress}) RETURN property', {
//                     propertyAddress: propertyAddress
//                   })
//                   .then(function(result8){
//                     var currentProperty = []
//                     result8.records.forEach(function(record){
//                       currentProperty.push({
//                         id: record._fields[0].identity.low,
//                         propertyAddress: record._fields[0].properties.propertyAddress,
//                         propertyOwner: record._fields[0].properties.propertyOwner,
//                         tenantCompany: record._fields[0].properties.tenantCompany,
//                         propertyPreviousOwner: record._fields[0].properties.propertyPreviousOwner,
//                         propertyCleaners: record._fields[0].properties.propertyCleaners,
//                         propertyMaintenance: record._fields[0].properties.propertyMaintenance,
//                         propertyEventsNotes: record._fields[0].properties.propertyEventsNotes,
//                         propertyBuildingType: record._fields[0].properties.propertyBuildingType,
//                         randomIdentifier: record._fields[0].properties.randomIdentifier
//                       });
//                     });
//             if (store.session('session') === 'loggedIn238928') {
//               res.render('rooms', {
//                 roomsPerProperty: propertyRoomArr,
//                 allRooms: allRoomsArray,
//                 tenants: tenantsArr,
//                 currentProperty: currentProperty,
//                 propertyAddress: {
//                   propertyAddress: propertyAddress
//                 },
//                 tenantCompany: {
//                   tenantCompany: tenantCompany
//                 }
//               });
//             } else {
//               res.render('logIn', {
//                 roomsPerProperty: propertyRoomArr,
//                 allRooms: allRoomsArray,
//                 tenants: tenantsArr,
//                 currentProperty: currentProperty,
//                 propertyAddress: {
//                   propertyAddress: propertyAddress
//                 },
//                 tenantCompany: {
//                   tenantCompany: tenantCompany
//                 }
//               });
//             }
//           });
//         });
//       });
//     })
//   .catch(function(error){
//     console.log(error)
//   });
//   //.then(() => session.close());
//   //session.close();
// });

// //property update form Post on property page:
// app.post('/propertyUpdateProperty', function(req,res){
//   var propertyAddress =  req.body.propertyAddress;
//   var tenantCompany = req.body.tenantCompany;
//   var propertyOwner =  req.body.propertyOwner;
//   var propertyPreviousOwner = req.body.propertyPreviousOwner;
//   var propertyCleaners = req.body.propertyCleaners;
//   var propertyMaintenance = req.body.propertyMaintenance;
//   var propertyEventsNotes = req.body.propertyEventsNotes;
//   var propertyBuildingType = req.body.propertyBuildingType;
//   var randomIdentifier = req.body.randomIdentifier;

//   session
//     .run(
//       'MATCH(a:Property {propertyAddress: $propertyAddress}) ' +
//       'SET a.propertyOwner = $propertyOwner ' +
//       'SET a.propertyPreviousOwner = $propertyPreviousOwner ' +
//       'SET a.propertyCleaners = $propertyCleaners ' +
//       'SET a.propertyMaintenance = $propertyMaintenance ' +
//       'SET a.propertyEventsNotes = $propertyEventsNotes ' +
//       'SET a.propertyBuildingType = $propertyBuildingType ' +
//       'RETURN a',
//       {
//           propertyAddress: propertyAddress,
//           propertyOwner: propertyOwner,
//           propertyPreviousOwner: propertyPreviousOwner,
//           propertyCleaners: propertyCleaners,
//           propertyMaintenance: propertyMaintenance,
//           propertyEventsNotes: propertyEventsNotes,
//           propertyBuildingType: propertyBuildingType
//       })
//     .then(function(result) {
//       session
//         .run('MATCH (room:Room)-[:IN_BUILDING]->(property:Property {propertyAddress: $propertyAddress}) RETURN room', {
//           propertyAddress: propertyAddress
//         })

//         .then(function(result6){
//           var propertyRoomArr = [];
//           result6.records.forEach(function(record){
//             propertyRoomArr.push({
//               id: record._fields[0].identity.low,
//               roomNumber: record._fields[0].properties.roomNumber,
//               propertyAddress: record._fields[0].properties.propertyAddress,
//               tenant: record._fields[0].properties.tenant,
//               tenantStartDate: record._fields[0].properties.tenantStartDate,
//               tenantEndDate: record._fields[0].properties.tenantEndDate,
//               propertyManager: record._fields[0].properties.propertyManager,
//               propertyOwner: record._fields[0].properties.propertyOwner,
//               leaseCompany: record._fields[0].properties.leaseCompany,
//               rentalPrice: record._fields[0].properties.rentalPrice,
//               priceStartDate: record._fields[0].properties.priceStartDate,
//               previousTenant: record._fields[0].properties.previousTenant,
//               randomIdentifier: record._fields[0].properties.randomIdentifier
//             });
//           });

//             session
//               .run('MATCH (r:Room) RETURN r')
//               .then(function(result2){
//                 var allRoomsArray = []
//                 result2.records.forEach(function(record){
//                   allRoomsArray.push({
//                     id: record._fields[0].identity.low,
//                     roomNumber: record._fields[0].properties.roomNumber,
//                     propertyAddress: record._fields[0].properties.propertyAddress,
//                     tenant: record._fields[0].properties.tenant,
//                     tenantStartDate: record._fields[0].properties.tenantStartDate,
//                     tenantEndDate: record._fields[0].properties.tenantEndDate,
//                     propertyManager: record._fields[0].properties.propertyManager,
//                     propertyOwner: record._fields[0].properties.propertyOwner,
//                     leaseCompany: record._fields[0].properties.leaseCompany,
//                     rentalPrice: record._fields[0].properties.rentalPrice,
//                     priceStartDate: record._fields[0].properties.priceStartDate,
//                     previousTenant: record._fields[0].properties.previousTenant,
//                     randomIdentifier: record._fields[0].properties.randomIdentifier
//                   })
//                 });

//                 session
//                   .run('MATCH (tenants:Tenant) RETURN tenants')
//                   .then(function(result3){
//                     var tenantsArr = []
//                     result3.records.forEach(function(record){
//                       tenantsArr.push({
//                         id: record._fields[0].identity.low,
//                         tenant: record._fields[0].properties.tenant,
//                         tenantMobile: record._fields[0].properties.tenantMobile,
//                         tenantEmail: record._fields[0].properties.tenantEmail,
//                         tenantNotes: record._fields[0].properties.tenantNotes,
//                         randomIdentifier: record._fields[0].properties.randomIdentifier
//                       });
//                     });

//                     session
//                       .run('MATCH (property:Property {propertyAddress: $propertyAddress}) RETURN property', {
//                         propertyAddress: propertyAddress
//                       })
//                       .then(function(result8){
//                         var currentProperty = []
//                         result8.records.forEach(function(record){
//                           currentProperty.push({
//                             id: record._fields[0].identity.low,
//                             propertyAddress: record._fields[0].properties.propertyAddress,
//                             propertyOwner: record._fields[0].properties.propertyOwner,
//                             tenantCompany: record._fields[0].properties.tenantCompany,
//                             propertyPreviousOwner: record._fields[0].properties.propertyPreviousOwner,
//                             propertyCleaners: record._fields[0].properties.propertyCleaners,
//                             propertyMaintenance: record._fields[0].properties.propertyMaintenance,
//                             propertyEventsNotes: record._fields[0].properties.propertyEventsNotes,
//                             propertyBuildingType: record._fields[0].properties.propertyBuildingType,
//                             randomIdentifier: record._fields[0].properties.randomIdentifier
//                           });
//                         });
//                 if (store.session('session') === 'loggedIn238928') {
//                   res.render('rooms', {
//                     roomsPerProperty: propertyRoomArr,
//                     allRooms: allRoomsArray,
//                     tenants: tenantsArr,
//                     currentProperty: currentProperty,
//                     propertyAddress: {
//                       propertyAddress: propertyAddress
//                     },
//                     tenantCompany: {
//                       tenantCompany: tenantCompany
//                     }
//                   });
//                 } else {
//                   res.render('logIn', {
//                     roomsPerProperty: propertyRoomArr,
//                     allRooms: allRoomsArray,
//                     tenants: tenantsArr,
//                     currentProperty: currentProperty,
//                     propertyAddress: {
//                       propertyAddress: propertyAddress
//                     },
//                     tenantCompany: {
//                       tenantCompany: tenantCompany
//                     }
//                   });
//                 }
//               });
//             });
//           });
//         });
//       })
//       .catch(function(error){
//         console.log(error)
//       });
//       //.then(() => session.close());
//       //session.close();
// })

// //room page per each property:
// app.post('/roomAdd', function(req, res){
//   var roomNumber = req.body.roomNumber;
//   var tenant = req.body.tenant;
//   var propertyAddress = req.body.propertyAddress;
//   var tenantStartDate = req.body.tenantStartDate;
//   var tenantEndDate = req.body.tenantEndDate;
//   var propertyManager = req.body.propertyManager;
//   var propertyOwner = req.body.propertyOwner;
//   var leaseCompany = req.body.tenantCompany;
//   var rentalPrice = req.body.rentalPrice;
//   var priceStartDate = req.body.priceStartDate;
//   var previousTenant = req.body.previousTenant;
//   var randomIdentifier = Math.round(Math.random() * 3000000);
//   var tenantRandomIdentifier = req.body.tenantRandomIdentifier;

//   session
//     .run(
//       'CREATE(n:Room {roomNumber: $roomNumber, propertyAddress: $propertyAddress, tenant: $tenant, tenantStartDate: $tenantStartDate, tenantEndDate: $tenantEndDate, propertyManager: $propertyManager, propertyOwner: $propertyOwner, leaseCompany: $leaseCompany, rentalPrice: $rentalPrice, priceStartDate: $priceStartDate, previousTenant: $previousTenant, randomIdentifier: $randomIdentifier})',
//       {
//           roomNumber: roomNumber,
//           propertyAddress: propertyAddress,
//           tenant: tenant,
//           tenantStartDate: tenantStartDate,
//           tenantEndDate: tenantEndDate,
//           propertyManager: propertyManager,
//           propertyOwner: propertyOwner,
//           leaseCompany: leaseCompany,
//           rentalPrice: rentalPrice,
//           priceStartDate: priceStartDate,
//           previousTenant: previousTenant,
//           randomIdentifier: neo4j.int(randomIdentifier)
//       })
//         .then(function(result){
//           session
//             .run(
//               'MATCH(r:Room {randomIdentifier: $randomIdentifier}) ' +
//               'MATCH(p:Property {propertyAddress: $propertyAddress}) ' +
//               'CREATE (r)-[:IN_BUILDING]->(p)',
//               {
//                   randomIdentifier: neo4j.int(randomIdentifier),
//                   propertyAddress: propertyAddress
//               })
//           .then(function(result){
//             session
//               .run(
//                 'MATCH(t:Tenant {tenant: $tenant}) ' +
//                 'MATCH(r:Room {randomIdentifier: $randomIdentifier}) ' +
//                 'CREATE (t)-[:TENANT_OF]->(r)',
//                 {
//                   tenant: tenant,
//                   randomIdentifier: neo4j.int(randomIdentifier)
//                 }
//               )

//               .then(function(result){
//                 session
//                   .run(
//                     'MATCH(c:TenantCompany {tenantCompany: $leaseCompany}) ' +
//                     'MATCH(r:Room {randomIdentifier: $randomIdentifier}) ' +
//                     'CREATE (c)-[:MANAGES]->(r)',
//                     {
//                         randomIdentifier: neo4j.int(randomIdentifier),
//                         leaseCompany: leaseCompany
//                     })
//                   .then(function(result){
//                     session
//                       .run('MATCH (room:Room)-[:IN_BUILDING]->(property:Property {propertyAddress: $propertyAddress}) RETURN room', {
//                         propertyAddress: propertyAddress
//                       })

//                       .then(function(result6){
//                         var propertyRoomArr = [];
//                         result6.records.forEach(function(record){
//                           propertyRoomArr.push({
//                             id: record._fields[0].identity.low,
//                             roomNumber: record._fields[0].properties.roomNumber,
//                             propertyAddress: record._fields[0].properties.propertyAddress,
//                             tenant: record._fields[0].properties.tenant,
//                             tenantStartDate: record._fields[0].properties.tenantStartDate,
//                             tenantEndDate: record._fields[0].properties.tenantEndDate,
//                             propertyManager: record._fields[0].properties.propertyManager,
//                             propertyOwner: record._fields[0].properties.propertyOwner,
//                             leaseCompany: record._fields[0].properties.leaseCompany,
//                             rentalPrice: record._fields[0].properties.rentalPrice,
//                             priceStartDate: record._fields[0].properties.priceStartDate,
//                             previousTenant: record._fields[0].properties.previousTenant,
//                             randomIdentifier: record._fields[0].properties.randomIdentifier
//                           });
//                         });

//                           session
//                             .run('MATCH (r:Room) RETURN r')
//                             .then(function(result2){
//                               var allRoomsArray = []
//                               result2.records.forEach(function(record){
//                                 allRoomsArray.push({
//                                   id: record._fields[0].identity.low,
//                                   roomNumber: record._fields[0].properties.roomNumber,
//                                   propertyAddress: record._fields[0].properties.propertyAddress,
//                                   tenant: record._fields[0].properties.tenant,
//                                   tenantStartDate: record._fields[0].properties.tenantStartDate,
//                                   tenantEndDate: record._fields[0].properties.tenantEndDate,
//                                   propertyManager: record._fields[0].properties.propertyManager,
//                                   propertyOwner: record._fields[0].properties.propertyOwner,
//                                   leaseCompany: record._fields[0].properties.leaseCompany,
//                                   rentalPrice: record._fields[0].properties.rentalPrice,
//                                   priceStartDate: record._fields[0].properties.priceStartDate,
//                                   previousTenant: record._fields[0].properties.previousTenant,
//                                   randomIdentifier: record._fields[0].properties.randomIdentifier
//                                 })
//                               });

//                               session
//                                 .run('MATCH (tenants:Tenants) RETURN tenants')
//                                 .then(function(result3){
//                                   var tenantsArr = []
//                                   result3.records.forEach(function(record){
//                                     tenantsArr.push({
//                                       id: record._fields[0].identity.low,
//                                       tenant: record._fields[0].properties.tenant,
//                                       tenantMobile: record._fields[0].properties.tenantMobile,
//                                       tenantEmail: record._fields[0].properties.tenantEmail,
//                                       tenantNotes: record._fields[0].properties.tenantNotes,
//                                       randomIdentifier: record._fields[0].properties.randomIdentifier
//                                     });
//                                   });
//                                 if (store.session('session') === 'loggedIn238928') {
//                                   res.render('rooms', {
//                                     roomsPerProperty: propertyRoomArr,
//                                     allRooms: allRoomsArray,
//                                     tenants: tenantsArr,
//                                     propertyAddress: propertyAddress,
//                                     tenantCompany: leaseCompany
//                                   });
//                                 } else {
//                                   res.render('logIn', {
//                                     roomsPerProperty: propertyRoomArr,
//                                     allRooms: allRoomsArray,
//                                     tenants: tenantsArr,
//                                     propertyAddress: propertyAddress,
//                                     tenantCompany: leaseCompany
//                                   });
//                                 }
//                             })
//                         })
//                     })
//               })
//           })
//         })
//     })
//     .catch(function(error){
//       console.log(error)
//     });
//     //.then(() => session.close());
//     //session.close();
// });

// //room update page render:
// app.post('/roomUpdateRoom', function(req, res){
//   var propertyAddress = req.body.propertyAddress;
//   var tenantCompany = req.body.tenantCompany;
//   var randomIdentifier = req.body.randomIdentifier;

//   session
//     .run('MATCH (room:Room {randomIdentifier: $randomIdentifier}) RETURN room', {
//       randomIdentifier: neo4j.int(randomIdentifier)
//     })
//     .then(function(result9){
//       var currentRoomArr = []
//       result9.records.forEach(function(record){
//         currentRoomArr.push({
//           id: record._fields[0].identity.low,
//           roomNumber: record._fields[0].properties.roomNumber,
//           propertyAddress: record._fields[0].properties.propertyAddress,
//           tenant: record._fields[0].properties.tenant,
//           tenantStartDate: record._fields[0].properties.tenantStartDate,
//           tenantEndDate: record._fields[0].properties.tenantEndDate,
//           propertyManager: record._fields[0].properties.propertyManager,
//           propertyOwner: record._fields[0].properties.propertyOwner,
//           leaseCompany: record._fields[0].properties.leaseCompany,
//           rentalPrice: record._fields[0].properties.rentalPrice,
//           priceStartDate: record._fields[0].properties.priceStartDate,
//           previousTenant: record._fields[0].properties.previousTenant,
//           randomIdentifier: record._fields[0].properties.randomIdentifier
//         });
//       });

//       session
//         .run('MATCH (tenants:Tenant) RETURN tenants')
//         .then(function(result3){
//           var tenantsArr = []
//           result3.records.forEach(function(record){
//             tenantsArr.push({
//               id: record._fields[0].identity.low,
//               tenant: record._fields[0].properties.tenant,
//               tenantMobile: record._fields[0].properties.tenantMobile,
//               tenantEmail: record._fields[0].properties.tenantEmail,
//               tenantNotes: record._fields[0].properties.tenantNotes,
//               randomIdentifier: record._fields[0].properties.randomIdentifier
//             });
//           });
//         if (store.session('session') === 'loggedIn238928') {
//           res.render('updateRoom', {
//             propertyAddress: {
//               propertyAddress: propertyAddress
//             },
//             tenantCompany: {
//               tenantCompany: tenantCompany
//             },
//             randomIdentifier: {
//               randomIdentifier: randomIdentifier
//             },
//             currentRoom: currentRoomArr,
//             tenants: tenantsArr
//           });
//         } else {
//           res.render('logIn', {
//             propertyAddress: {
//               propertyAddress: propertyAddress
//             },
//             tenantCompany: {
//               tenantCompany: tenantCompany
//             },
//             randomIdentifier: {
//               randomIdentifier: randomIdentifier
//             },
//             currentRoom: currentRoomArr,
//             tenants: tenantsArr
//           });
//         }
//       });
//     })
//     .catch(function(error){
//       console.log(error)
//     });
//     //.then(() => session.close());
//     //session.close();
// })

// //room update form Post:
// app.post('/roomUpdateRoomSubmitUpdate', function(req, res) {
//   var propertyAddress = req.body.propertyAddress;
//   var tenantCompany = req.body.tenantCompany;
//   var randomIdentifier = req.body.randomIdentifier;
//   var roomNumber = req.body.roomNumber;
//   var tenant = req.body.tenant;
//   var tenantStartDate = req.body.tenantStartDate;
//   var tenantEndDate = req.body.tenantEndDate;
//   var propertyManager = req.body.propertyManager;
//   var propertyOwner = req.body.propertyOwner;
//   var rentalPrice = req.body.rentalPrice;
//   var priceStartDate = req.body.priceStartDate;
//   var previousTenant = req.body.previousTenant;

//   session
//     .run(
//       'MATCH(a:Room {randomIdentifier: $randomIdentifier}) ' +
//       'SET a.roomNumber = $roomNumber ' +
//       'SET a.tenant = $tenant ' +
//       'SET a.tenantStartDate = $tenantStartDate ' +
//       'SET a.tenantEndDate = $tenantEndDate ' +
//       'SET a.propertyManager = $propertyManager ' +
//       'SET a.propertyOwner = $propertyOwner ' +
//       'SET a.rentalPrice = $rentalPrice ' +
//       'SET a.priceStartDate = $priceStartDate ' +
//       'SET a.previousTenant = $previousTenant ' +
//       'RETURN a',
//       {
//         randomIdentifier: neo4j.int(randomIdentifier),
//         roomNumber: roomNumber,
//         tenant: tenant,
//         tenantStartDate: tenantStartDate,
//         tenantEndDate: tenantEndDate,
//         propertyManager: propertyManager,
//         propertyOwner: propertyOwner,
//         rentalPrice: rentalPrice,
//         priceStartDate: priceStartDate,
//         previousTenant: previousTenant
//       })
//       .then(function(result){
//         session
//           .run('MATCH (room:Room {randomIdentifier: $randomIdentifier}) RETURN room', {
//             randomIdentifier: neo4j.int(randomIdentifier)
//           })
//           .then(function(result9){
//             var currentRoomArr = []
//             result9.records.forEach(function(record){
//               currentRoomArr.push({
//                 id: record._fields[0].identity.low,
//                 roomNumber: record._fields[0].properties.roomNumber,
//                 propertyAddress: record._fields[0].properties.propertyAddress,
//                 tenant: record._fields[0].properties.tenant,
//                 tenantStartDate: record._fields[0].properties.tenantStartDate,
//                 tenantEndDate: record._fields[0].properties.tenantEndDate,
//                 propertyManager: record._fields[0].properties.propertyManager,
//                 propertyOwner: record._fields[0].properties.propertyOwner,
//                 leaseCompany: record._fields[0].properties.leaseCompany,
//                 rentalPrice: record._fields[0].properties.rentalPrice,
//                 priceStartDate: record._fields[0].properties.priceStartDate,
//                 previousTenant: record._fields[0].properties.previousTenant,
//                 randomIdentifier: record._fields[0].properties.randomIdentifier
//               });
//             });

//             session
//               .run('MATCH (tenants:Tenant) RETURN tenants')
//               .then(function(result3){
//                 var tenantsArr = []
//                 result3.records.forEach(function(record){
//                   tenantsArr.push({
//                     id: record._fields[0].identity.low,
//                     tenant: record._fields[0].properties.tenant,
//                     tenantMobile: record._fields[0].properties.tenantMobile,
//                     tenantEmail: record._fields[0].properties.tenantEmail,
//                     tenantNotes: record._fields[0].properties.tenantNotes,
//                     randomIdentifier: record._fields[0].properties.randomIdentifier
//                   });
//                 });
//               if (store.session('session') === 'loggedIn238928') {
//                 res.render('updateRoom', {
//                   propertyAddress: {
//                     propertyAddress: propertyAddress
//                   },
//                   tenantCompany: {
//                     tenantCompany: tenantCompany
//                   },
//                   randomIdentifier: {
//                     randomIdentifier: randomIdentifier
//                   },
//                   currentRoom: currentRoomArr,
//                   tenants: tenantsArr
//                 });
//               } else {
//                 res.render('logIn', {
//                   propertyAddress: {
//                     propertyAddress: propertyAddress
//                   },
//                   tenantCompany: {
//                     tenantCompany: tenantCompany
//                   },
//                   randomIdentifier: {
//                     randomIdentifier: randomIdentifier
//                   },
//                   currentRoom: currentRoomArr,
//                   tenants: tenantsArr
//                 });
//               }
//             });
//           });
//         })
//     .catch(function(error){
//       console.log(error)
//     });
//     //.then(() => session.close());
//     //session.close();
// })

// app.listen(8080);
// console.log('Listening on port 8080.');

// module.export = app;
