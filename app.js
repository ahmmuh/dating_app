const data = [
  {
    name: "Ahmed",
    age: 23,
    gender: "male",
    location: "Umeeå",
    lookingFor: "female",
    image: "https://randomuser.me/api/portraits/med/men/96.jpg"
  },
  {
    name: "Abdalla",
    age: 23,
    gender: "male",
    location: "UK",
    lookingFor: "female",
    image: "https://randomuser.me/api/portraits/med/men/82.jpg"
  },
  {
    name: "Calas",
    age: 23,
    gender: "male",
    location: "Boston",
    lookingFor: "female",
    image: "https://randomuser.me/api/portraits/med/men/86.jpg"
  },
  {
    name: "Safiya",
    age: 23,
    gender: "female",
    location: "Xamar",
    lookingFor: "male",
    image: "https://randomuser.me/api/portraits/med/women/80.jpg"
  }
];
const profiles = profilesIterator(data);
nextProfile();
document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("displayProfile").innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">age: ${currentProfile.age}</li>
    <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Looking for: ${currentProfile.lookingFor}</li>
    </ul>

`;
    document.getElementById("displayImage").innerHTML = `

<img src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}
function profilesIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
