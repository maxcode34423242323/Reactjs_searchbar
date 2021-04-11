import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Search from "./search";
import Announcer from "./announcer";

const posts = [
  { id: "1", name: "Shaak Ti" },
  { id: "2", name: " Ziro the Hutt" },
  { id: "3", name: "Walrus Man " },
  { id: "4", name: "The Smuggler" },
  { id: "5", name: "Xamuel" },
  { id: "6", name: "Zuckuss" },
  { id: "7", name: "Wes Janson" },
  { id: "8", name: "Lennox" },
  { id: "9", name: "Yaddle" },
  { id: "10", name: "Yoda" },
  { id: "11", name: "Wollivan" },
  { id: "12", name: "Sly Moore" },
  { id: "13", name: "Snap Wexley" },
  { id: "14", name: "Tasu" },
  { id: "15", name: "Shmi Skywalker" },
  { id: "16", name: "Seventh Sister" },
  { id: "17", name: "U9-C4" },
  { id: "18", name: "Adi Gallia" },
  { id: "19", name: "Agen Kolar" },
  { id: "20", name: "Admiral Dodd Rancit" },
  { id: "21", name: "Commander Cody (CC-2224)" },
  { id: "22", name: "Darth Maul" },
  { id: "23", name: "Darth Tyranus" },
  { id: "24", name: "Admiral Ozzel" },
  { id: "25", name: "Doctor Aphra" },
  { id: "26", name: "Carlist Rieekan" },
  { id: "28", name: "Chi Eekway Papanoida" },
  { id: "29", name: " EV-9D9" },
  { id: "30", name: " DJ" },
  { id: "31", name: " Dr. Cylo" },
  { id: "32", name: "Eli Vanto" },
  { id: "33", name: " Dexter Jettster" },
  { id: "34", name: " Enfys Nest" },
  { id: "35", name: "Evaan Verlaine" },
  { id: "36", name: "Eneb Ray" },
  { id: "37", name: "Embo" },
  { id: "38", name: "Koth" },
  { id: "39", name: "Eighth Brother" },
  { id: "40", name: "Ellé" },
  { id: "41", name: "Ello Asty" },
  { id: "42", name: "Eirtaé" },
  { id: "43", name: "Doctor Aphra" },
  { id: "44", name: "Echuu Shen-Jon" },
  { id: "45", name: "Ebe E. Endocott" },
  { id: "46", name: "Dud Bolt" },
  { id: "47", name: "Commander Fox" },
  { id: "48", name: "Commander Fil 3714" },
  { id: "49", name: "C1-10P" },
  { id: "50", name: "Depa Billaba" },
  { id: "51", name: "Derek Klivian" },
  { id: "52", name: "Commander Jet" },
  { id: "53", name: "Bossk" },
  { id: "54", name: "BB-8" },
  { id: "55", name: "AZI-3" },
  { id: "56", name: "Bargwill Tomder" },
  { id: "57", name: "Droidbait" },
  { id: "58", name: "Tobias Beckett" },
  { id: "59", name: "Cordé" },
  { id: "60", name: "Aks Moe" },
];

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <Router>
      <div className="App">
        <Announcer message={`${filteredPosts.length} posts`} />
        <img src={logo} className="App-logo" alt="logo" />
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>{post.name}</li>
          ))}
        </ul>
      </div>
    </Router>
  );
};

export default App;
