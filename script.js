document.getElementById("search").addEventListener('click',function(){

   
   const inputSong = document.getElementById("searchItems").value;
     fetch('https://api.lyrics.ovh/suggest/'+inputSong+'')
     .then(res => res.json())
     .then (data => {

        console.log(data);
        const lyricsName= document.getElementById("users");
        for (let i = 0; i < data.data.length; i++) {
           const user = data.data[i];
           const p = document.createElement('p');
           p.innerHTML =`<p class="findSong"> <strong> ${data.data[i].title} </strong> Album by <strong> ${data.data[i].artist.name} </strong>
           <button class="btn btn-success" onclick= getSongLyrics() >Get Lyrics </button> </p>` ;
           lyricsName.appendChild(p);
           
        }
        
      })
      
   })

   function getSongLyrics(lyricsName,artistName){

      fetch(`https://api.lyrics.ovh/v1/${data.data[i].artist.name}/${data.data[i].title}`)
      .then(res => res.json())
      .then(data => {
         console.log(data);
      })
   }
      
      
      
      
      
     
        //   document.getElementById("one").innerText = data.data[0].title;
      //   document.getElementById("two").innerText = data.data[1].title;
      //    document.getElementById("three").innerText = data.data[2].title;
      //    document.getElementById("four").innerText = data.data[3].title;
      //   document.getElementById("five").innerText = data.data[4].title;
      //   document.getElementById("six").innerText = data.data[5].title;
      //   document.getElementById("seven").innerText = data.data[6].title;
      //   document.getElementById("eight").innerText = data.data[7].title;
      //   document.getElementById("nine").innerText = data.data[8].title;
      //   document.getElementById("ten").innerText = data.data[9].title;


      //   document.getElementById("artistOne").innerText = data.data[0].artist.name;
      //   document.getElementById("artistTwo").innerText = data.data[1].artist.name;
      //    document.getElementById("artistThree").innerText = data.data[2].artist.name;
      //   document.getElementById("artistFour").innerText = data.data[3].artist.name;
      //   document.getElementById("artistFive").innerText = data.data[4].artist.name;
      //   document.getElementById("artistSix").innerText = data.data[5].artist.name;
      //   document.getElementById("artistSeven").innerText = data.data[6].artist.name;
      //   document.getElementById("artistEight").innerText = data.data[7].artist.name;
      //   document.getElementById("artistNine").innerText = data.data[8].artist.name;
      //   document.getElementById("artistTen").innerText = data.data[9].artist.name;

      //   const hide = document.getElementById("hide");
      //   hide.style.display="block";
      //   document.getElementById("searchItems").value="";
        
      //    const lyrics= document.getElementById("getLyrics");
      //    lyrics.addEventListener('click',function(){
      //       fetch('https://api.lyrics.ovh/v1/coldplay/Adventure of a Lifetime')
      //       .then(res => res.json())
      //       .then(data => {
      //          console.log(data);
      //       })
      //    })


      // 2 din try kore meet session gula te join kore + vaiyar video dekhe etotuk korte parci . 
           


    






