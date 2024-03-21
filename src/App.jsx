import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import jobService from "./services/jobService";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobsPage";
import SingleJobPage, { jobLoader } from "./pages/SingleJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddJobPage from "./pages/AddJobPage";

const App = () => {
  // Add Job
  const createJob = (payload) => {
    jobService.createJob(payload);
  };

  // Delete Job
  const deleteJob = (id) => {
    jobService.deleteJob(id);
    console.log("delte id: " + id);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route
          path="/jobs/:id"
          element={<SingleJobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage createJob={createJob} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
