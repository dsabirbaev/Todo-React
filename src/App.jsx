
import Header from "./components/Header";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import Home from "./pages/Home";
import Error from "./pages/Error";

import { BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Header />

        <main className="min-h-screen">
          <section className="mt-5">

            <div className="container mx-auto px-5">

              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/comments" element={<Comments />} />
                  <Route path="*" element={<Error />} />
              </Routes>
            
            </div>

          </section>
        </main>

      </BrowserRouter>

    </div>
  );
};

export default App;