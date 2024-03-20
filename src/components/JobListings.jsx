import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import JobListing from "./JobListing.jsx";
import jobService from "../services/jobService.js";
import Spinner from "./Spinner.jsx";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      const query = isHome ? { _limit: 3 } : {};

      try {
        const { data } = await jobService.getJobs(query);
        setJobs(isHome ? data.slice(0, 3) : data);
      } catch (error) {
        console.log("Error getting jobs", error);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <JobListing key={index} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

JobListings.propTypes = {
  isHome: PropTypes.bool,
};

export default JobListings;
