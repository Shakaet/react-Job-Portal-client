import React from 'react';

const AddaJob = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collecting data using e.target.name.value
    const formData = {
      title: e.target.title.value,
      location: e.target.location.value,
      jobType: e.target.jobType.value,
      category: e.target.category.value,
      applicationDeadline: e.target.applicationDeadline.value,
      salaryRange: {
        min: e.target.salaryRangeMin.value,
        max: e.target.salaryRangeMax.value,
        currency: e.target.currency.value,
      },
      description: e.target.description.value,
      company: e.target.company.value,
      requirements: e.target.requirements.value.split(',').map(item => item.trim()), // Convert comma-separated string into an array
      responsibilities: e.target.responsibilities.value.split(',').map(item => item.trim()), // Convert comma-separated string into an array
      status: e.target.status.value,
      hr_email: e.target.hrEmail.value,
      hr_name: e.target.hrName.value,
      company_logo: e.target.companyLogo.value,
    };

    // Log the data or send to API
    console.log(formData);

    // Example POST request using fetch
    // fetch('/api/jobs', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then(response => response.json())
    //   .then(data => console.log('Job posted:', data))
    //   .catch(error => console.error('Error:', error));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            name="title"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            name="location"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Job Type</label>
          <select
            name="jobType"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Hybrid">Hybrid</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            name="category"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Application Deadline</label>
          <input
            name="applicationDeadline"
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Salary Range (Min)</label>
          <input
            name="salaryRangeMin"
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Salary Range (Max)</label>
          <input
            name="salaryRangeMax"
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

     
         <div> 
          <label className="block text-sm font-medium text-gray-700">Currency</label>
          <select
            name="currency"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Hybrid">BDT</option>
            <option value="Full-time">USD</option>
            <option value="Part-time">INR</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Job Description</label>
          <textarea
            name="description"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company</label>
          <input
            name="company"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Requirements (Comma separated)</label>
          <input
            name="requirements"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., JIRA, Trello, Slack"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Responsibilities (Comma separated)</label>
          <input
            name="responsibilities"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., Manage team, Oversee execution"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <input
            name="status"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">HR Email</label>
          <input
            name="hrEmail"
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">HR Name</label>
          <input
            name="hrName"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company Logo URL</label>
          <input
            name="companyLogo"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit Job Posting
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddaJob;
