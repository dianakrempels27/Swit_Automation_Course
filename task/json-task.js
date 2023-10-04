//Task
// const jsonForm = {
//     data: {
//       id: 22,
//       type_id: 2,
//       type: "Lesson",
//       priority: 9,
//       name: "Lesson",
//       section_id: 5,
//       progress: {
//         completed: true,
//         score: "000",
//         answered: 7,
//         next_question_id: null,
//       },
//       topics: [
//         {
//           id: 33,
//           priority: 1,
//           name: "What can we trust?",
//           unit_id: 22,
//           attachment: null,
//           questions: [
//             { topic_id: 33, question_id: 189, second: 59 },
//             { topic_id: 33, question_id: 3101, second: 217 },
//           ],
//           is_completed: true,
//           is_video_completed: true,
//         },
//         {
//           id: 35,
//           priority: 2,
//           name: "Is that really enough?",
//           unit_id: 22,
//           attachment: null,
//           questions: [
//             { topic_id: 35, question_id: 3099, second: 46 },
//             { topic_id: 35, question_id: 3100, second: 237 },
//           ],
//           is_completed: true,
//           is_video_completed: true,
//         },
//         {
//           id: 37,
//           priority: 3,
//           name: "No diagrams, no worries",
//           unit_id: 22,
//           attachment: null,
//           questions: [
//             { topic_id: 37, question_id: 193, second: 47 },
//             { topic_id: 37, question_id: 194, second: 108 },
//             { topic_id: 37, question_id: 3102, second: 247 },
//           ],
//           is_completed: true,
//           is_video_completed: true,
//         },
//       ],
//     },
//   };
//Є дані,збережні в об'єкті. Потрібно знайти суму всіх questions всіх topics

const jsonForm = {
     data: {
           id: 22,
           type_id: 2,
           type: "Lesson",
           priority: 9,
           name: "Lesson",
           section_id: 5,
           progress: {
             completed: true,
             score: "000",
             answered: 7,
             next_question_id: null,
           },
           topics: [
             {
               id: 33,
               priority: 1,
               name: "What can we trust?",
               unit_id: 22,
               attachment: null,
               questions: [
                 { topic_id: 33, question_id: 189, second: 59 },
                 { topic_id: 33, question_id: 3101, second: 217 },
               ],
               is_completed: true,
               is_video_completed: true,
             },
             {
               id: 35,
               priority: 2,
               name: "Is that really enough?",
               unit_id: 22,
               attachment: null,
               questions: [
                 { topic_id: 35, question_id: 3099, second: 46 },
                 { topic_id: 35, question_id: 3100, second: 237 },
               ],
               is_completed: true,
               is_video_completed: true,
             },
             {
               id: 37,
               priority: 3,
               name: "No diagrams, no worries",
               unit_id: 22,
               attachment: null,
               questions: [
                 { topic_id: 37, question_id: 193, second: 47 },
                 { topic_id: 37, question_id: 194, second: 108 },
                 { topic_id: 37, question_id: 3102, second: 247 },
               ],
               is_completed: true,
               is_video_completed: true,
             },
           ],
         },
      };

      let sum = 0;

      for(let i = 0; i < jsonForm.data.topics.length; i++) {
        sum += jsonForm.data.topics[i].questions.length;
      };

      console.log(sum);

      let result = jsonForm.data.topics.length;

      console.log(result);