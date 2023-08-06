var neo4j = require('neo4j-driver');

const URI = 'neo4j+s://61c76ce3.databases.neo4j.io'
const USER = 'neo4j'
const PASSWORD = 'jtvkGRx3f2MqLczEpGXrPSC4n7IFUGOgM30_P_7JQEM'

export const getAllFamilyMembers = async () => {

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

  session
    .run('MATCH(a:Member) RETURN a')
    .then(function(result){
      console.log('result: ', result)
      return result
    })  
  //   .subscribe({
  //     onKeys: keys => {
  //       console.log('keys: ', keys)
  //     },
  //     onNext: record => {
  //       console.log('records:', record.get('a'))
  //       recordsFromNeo4J.push(record.get('a'))
  //     },
  //     onCompleted: (summary) => {
  //       console.log('summary:', summary)
  //       session.close()
  //     },
  //     onError: error => {
  //       console.log(error)
  //     }
  // })

  // console.log('recordsFromNeo4J: ', recordsFromNeo4J)
  // return recordsFromNeo4J
}

export const addFamilyMember = async (name, gender) => {

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

  session
    .run('CREATE(a:Member {name: $name, gender: $gender }) RETURN a:Member', {
      name: name,
      gender: gender
    })
    .subscribe({
      onKeys: keys => {
        console.log(keys)
      },
      onNext: record => {
        console.log(record.get('name'))
      },
      onCompleted: (summary) => {
        console.log('summary:', summary)
        session.close()
      },
      onError: error => {
        console.log(error)
      }
  })
}

export const addFamilyMemberRelationship = async (name, relative, relationship) => {

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

  session
    .run('MATCH (familyMember:Member {familyMember: $name} ' +
      'MATCH (relative:Member {relative: $relative}) ' +
      'CREATE (familyMember)-[:$relationship]->(relative)',
    {
      name: name,
      relative: relative,
      relationship: relationship
    })
    .subscribe({
      onKeys: keys => {
        console.log(keys)
      },
      onNext: record => {
        console.log(record.get('name'))
      },
      onCompleted: (summary) => {
        console.log('summary:', summary)
        session.close()
      },
      onError: error => {
        console.log(error)
      }
  })
}

// export const deleteFamilyMember = async (name, gender) => {

//   let driver

//   try {
//     driver = neo4j.driver(URI,  neo4j.auth.basic(USER, PASSWORD))
//     const serverInfo = await driver.getServerInfo()
//     console.log('Connection established')
//     console.log(serverInfo)
//   } catch(err) {
//     console.log(`Connection error\n${err}\nCause: ${err.cause}`)
//   }
//   console.log('driver: ', driver)
//   var session = driver.session();

//   session
//     .run('CREATE(a:Member {name: $name, gender: $gender }) RETURN a:Member', {
//       name: name,
//       gender: gender
//     })
//     .subscribe({
//       onKeys: keys => {
//         console.log(keys)
//       },
//       onNext: record => {
//         console.log(record.get('name'))
//       },
//       onCompleted: (summary) => {
//         console.log('summary:', summary)
//         session.close()
//       },
//       onError: error => {
//         console.log(error)
//       }
//   })
// }

// export const deleteFamilyMemberRelationship = async (name, gender) => {

//   let driver

//   try {
//     driver = neo4j.driver(URI,  neo4j.auth.basic(USER, PASSWORD))
//     const serverInfo = await driver.getServerInfo()
//     console.log('Connection established')
//     console.log(serverInfo)
//   } catch(err) {
//     console.log(`Connection error\n${err}\nCause: ${err.cause}`)
//   }
//   console.log('driver: ', driver)
//   var session = driver.session();

//   session
//     .run('CREATE(a:Member {name: $name, gender: $gender }) RETURN a:Member', {
//       name: name,
//       gender: gender
//     })
//     .subscribe({
//       onKeys: keys => {
//         console.log(keys)
//       },
//       onNext: record => {
//         console.log(record.get('name'))
//       },
//       onCompleted: (summary) => {
//         console.log('summary:', summary)
//         session.close()
//       },
//       onError: error => {
//         console.log(error)
//       }
//   })
// }