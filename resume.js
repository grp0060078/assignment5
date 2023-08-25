// Create your own resume data in JSON format.

const resume = {
    Name           :'Rajapandi G',
    contactDetails :{
       email       :'grp006007@gmail.com',
       phone       :8825506036,
    },
    address        :{
        doorno     :449,
        street     :'North Street',
        village    :'Anaipatti',
        taluk      :'Nilakottai',
        district   :'Dindigul',
        pincode    :624219

    },
    education          :{
        sslc           :{
         institution   :'GKHSS',
         yearofpassing :2014,
         percentage    :90,
        },
         hsc           :{
         institution   :'GKHSS',
         yearofpassing :2016,
         percentage    :73,
        },
        degree         :{
         course        : 'Bsc Chemistry',
         institution   :'PASC',
         yearofpassing :2019,
         percentage    :66,
        },
        Pgdiploma      :{
         course        :'PGDIMF',
         institution   :'MKU',
         yearofpassing :2020,
         percentage    :90,
        },
    },
    
    skills             :['Ms Word','excel'],
    personalDetails    :{
        Gender         :'Male',
        maritalstatus  :'Single',
        languagesknown :['Tamil,English'],
        nationality    :'Indian',
        hobbies        :['Cricket','Chess','Music'],
    },
Declaration:{
      me :'I here declare that the detail above are correct and true to the best of my knowledge',
    
      Place :'Anaipatti',                                             

      Date  :2023}
}


console.log(JSON.stringify(resume));