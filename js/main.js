const doc = document;

doc.addEventListener("DOMContentLoaded", function() {
  // the DOM is fully loaded
  console.log("Document ready!");


  fetch('json/data.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      appendData(json);
    });

  function appendData(json) {
    console.log(json);
    for (key in json) {
      console.log(key);
    let data = json[key];
      console.log(data);
      if(data['jcr:content']){
        let title = data['jcr:content']['jcr:title'];
        console.log(`title: ${title}`);

        let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
        console.log(`active: ${isActive}`);

        if(isActive === "Activate"){
      doc.querySelector("#denmark").innerHTML += `
      <article class="activate">
      <h6>${title}</h6>
      </article>
      `;
    } else if(isActive === "Deactivate"){
  doc.querySelector("#denmark").innerHTML += `
  <article class="deactivate">
  <h6>${title}</h6>
  </article>
  `;
    } else{
      doc.querySelector("#denmark").innerHTML += `
      <article class="other">
      <h6>${title}</h6>
      </article>
      `;

    }
  }
    }
  }


  //Fetch JSON for Germany
  fetch('json/germany.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      appendDataGermany(json);
    });

  function appendDataGermany(json) {
    console.log(json);
    for (key in json) {
      console.log(key);
    let data = json[key];
      console.log(data);
      if(data['jcr:content']){
        let title = data['jcr:content']['jcr:title'];
        console.log(`title: ${title}`);

        let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
        console.log(`active: ${isActive}`);

        if(isActive === "Activate"){
      doc.querySelector("#germany").innerHTML += `
      <article class="activate">
      <h6>${title}</h6>
      </article>
      `;
    } else if(isActive === "Deactivate"){
  doc.querySelector("#germany").innerHTML += `
  <article class="deactivate germany">
  <h6>${title}</h6>
  </article>
  `;
    } else{
      doc.querySelector("#germany").innerHTML += `
      <article class="other germany">
      <h6>${title}</h6>
      </article>
      `;

    }
  }
    }
  }

  //India English
  fetch('json/india.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      appendDataIndia(json);
    });

  function appendDataIndia(json) {
    console.log(json);
    for (key in json) {
      console.log(key);
    let data = json[key];
      console.log(data);
      if(data['jcr:content']){
        let title = data['jcr:content']['jcr:title'];
        console.log(`title: ${title}`);

        let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
        console.log(`active: ${isActive}`);

        if(isActive === "Activate"){
      doc.querySelector("#india").innerHTML += `
      <article class="activate india">
      <h6>${title}</h6>
      </article>
      `;
    } else if(isActive === "Deactivate"){
  doc.querySelector("#india").innerHTML += `
  <article class="deactivate india">
  <h6>${title}</h6>
  </article>
  `;
    } else{
      doc.querySelector("#india").innerHTML += `
      <article class="other india">
      <h6>${title}</h6>
      </article>
      `;

    }
  }
    }
  }

  //Fetch JSON for Turkey
  fetch('json/turkey.json')
    .then(function(response) {
      return response.json();
    })
    .then(json => {
      appendDataTurkey(json);
    });

  function appendDataTurkey(json) {
    console.log(json);
    for (key in json) {
      console.log(key);
    let data = json[key];
      console.log(data);
      if(data['jcr:content']){
        let title = data['jcr:content']['jcr:title'];
        console.log(`title: ${title}`);

        let isActive = data[`jcr:content`][`cq:lastReplicationAction`];
        console.log(`active: ${isActive}`);

        if(isActive === "Activate"){
      doc.querySelector("#turkey").innerHTML += `
      <article class="activate">
      <h6>${title}</h6>
      </article>
      `;
    } else if(isActive === "Deactivate"){
  doc.querySelector("#turkey").innerHTML += `
  <article class="deactivate turkey">
  <h6>${title}</h6>
  </article>
  `;
    } else{
      doc.querySelector("#turkey").innerHTML += `
      <article class="other turkey">
      <h6>${title}</h6>
      </article>
      `;

    }
  }
    }
  }

  // DOMContentLoaded event listener end //
});
