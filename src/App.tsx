import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, RootLayout } from "./components/layouts";
import { ExerciseDetails, Home } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
      </RootLayout>
      <Footer />
    </>
  );
};

export default App;
