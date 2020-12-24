var faunadb = require('faunadb'),
  q = faunadb.query;
  (async()=>{
        var adminClient = new faunadb.Client({ secret: "YOUR_SECRET_KEY" });
      try
      {
          const result=await adminClient.query(
            // q.CreateDatabase({ name: 'tempdb' })

            // q.CreateKey({
            //     database: q.Database('tempdb'),
            //     role: 'admin',
            //   })

            // q.CreateCollection({ name: 'messages' })

            // q.CreateIndex({
            //     name: 'tempdb',
            //     source: q.Collection('messages'),
            //     terms: [{ field: ['data', 'details'] }],
            //   })

        //     q.Create(
        //         q.Collection('messages'),
        //         { data: {details: 'I am fine' } },
        //       )
        
        // q.Map(
        //     [
        //       'What are you doing',
        //       'Unknown',
        //       'fine',
        //     ],
        //     q.Lambda(
        //       'details',
        //       q.Create(
        //         q.Collection('messages'),
        //         { data: { details: q.Var('details') } },
        //       )
        //     ),
        //   )

        // q.Get(q.Ref(q.Collection('messages'), '285808807356924423'))

        // q.Get(
        //     q.Match(q.Index('tempdb'), 'fine')
        //   )

        // q.Update(
        //     q.Ref(q.Collection('messages'), '285808807356925447'),
        //     { data: { details:"i am ok"}},
        //   )

        // q.Replace(
        //     q.Ref(q.Collection('messages'), '285808807356925447'),
        //     { data: { details: 'i am sick' } },
        //   )

        q.Delete(
            q.Ref(q.Collection('messages'), '285808807356925447')
          )
        );
         console.log(result);
      }

    catch(err){
           console.log(err)
      }
     
  })();