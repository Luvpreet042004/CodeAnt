import React from "react";

const repositories = [
  {
    name: "design-system",
    language: "React",
    size: "7320 KB",
    updated: "1 day ago",
    visibility: "Public",
  },
  {
    name: "codeant-ci-app",
    language: "Javascript",
    size: "5871 KB",
    updated: "2 days ago",
    visibility: "Private",
  },
  {
    name: "analytics-dashboard",
    language: "Python",
    size: "4521 KB",
    updated: "5 days ago",
    visibility: "Private",
  },
  {
    name: "mobile-app",
    language: "Swift",
    size: "3096 KB",
    updated: "3 days ago",
    visibility: "Public",
  },
  {
    name: "e-commerce-platform",
    language: "Java",
    size: "6210 KB",
    updated: "6 days ago",
    visibility: "Private",
  },
  {
    name: "blog-website",
    language: "HTML/CSS",
    size: "1876 KB",
    updated: "4 days ago",
    visibility: "Public",
  },
  {
    name: "social-network",
    language: "PHP",
    size: "5432 KB",
    updated: "7 days ago",
    visibility: "Private",
  },
  {
    name: "social-network",
    language: "PHP",
    size: "5432 KB",
    updated: "7 days ago",
    visibility: "Private",
  },
  {
    name: "social-network",
    language: "PHP",
    size: "5432 KB",
    updated: "7 days ago",
    visibility: "Private",
  },
  {
    name: "social-network",
    language: "PHP",
    size: "5432 KB",
    updated: "7 days ago",
    visibility: "Private",
  },
  {
    name: "social-network",
    language: "PHP",
    size: "5432 KB",
    updated: "7 days ago",
    visibility: "Private",
  },
];

const Repositories: React.FC = () => {
  return (
    <div className="pt-4 lg:my-6 bg-white lg:w-[97%] w-full lg:rounded-xl overflow-hidden">
      {/* Fixed Top Bar */}
      <div className="px-6 w-full top-0 bg-white z-10">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">Repositories</h2>
          <div className="space-x-2 flex">
            <button className="flex text-[#414651] border border-[#D5D7DA] bg-white space-x-1 items-center justify-center py-2 px-4 rounded-lg">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.9609 11.4102C16.418 11.5508 16.6641 12.0078 16.5234 12.4648C15.5391 15.8047 12.4453 18.125 8.96484 18.125C6.1875 18.125 3.62109 16.6133 2.21484 14.2578V17.8438C2.21484 18.3359 1.86328 18.6875 1.37109 18.6875C0.914062 18.6875 0.527344 18.3359 0.527344 17.8438V12.2188C0.527344 11.7617 0.914062 11.375 1.37109 11.375H6.99609C7.48828 11.375 7.83984 11.7617 7.83984 12.2188C7.83984 12.7109 7.45312 13.0625 6.99609 13.0625H3.44531C4.5 15.1016 6.60938 16.4375 8.96484 16.4375C11.707 16.4375 14.168 14.6094 14.9062 11.9727C15.0469 11.5156 15.5039 11.2695 15.9609 11.4102ZM16.5938 1.8125C17.0508 1.8125 17.4375 2.19922 17.4375 2.65625V8.28125C17.4375 8.77344 17.0508 9.125 16.5938 9.125H10.9688C10.4766 9.125 10.125 8.77344 10.125 8.28125C10.125 7.82422 10.4766 7.4375 10.9688 7.4375H14.4844C13.4297 5.43359 11.3203 4.0625 9 4.0625C6.25781 4.0625 3.79688 5.92578 3.02344 8.52734C2.91797 8.98438 2.46094 9.23047 2.00391 9.08984C1.54688 8.98438 1.30078 8.49219 1.40625 8.07031C2.39062 4.73047 5.51953 2.375 9 2.375C11.7773 2.375 14.3438 3.92188 15.75 6.27734V2.65625C15.75 2.19922 16.1016 1.8125 16.5938 1.8125Z"
                    fill="#414651"
                  />
                </svg>
              </span>
              <span>Refresh All</span>
            </button>
            <button className="text-white bg-blue-500 py-2 px-4 rounded-lg">
              + Add Repository
            </button>
          </div>
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg w-1/2 p-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17.7188 19.8086C18.0703 20.1602 18.0703 20.6875 17.7188 21.0039C17.5781 21.1797 17.3672 21.25 17.1562 21.25C16.9102 21.25 16.6992 21.1797 16.5234 21.0039L11.8125 16.293C10.5469 17.3125 8.96484 17.875 7.27734 17.875C3.26953 17.875 0 14.6055 0 10.5625C0 6.55469 3.23438 3.25 7.27734 3.25C11.2852 3.25 14.5898 6.55469 14.5898 10.5625C14.5898 12.2852 14.0273 13.8672 13.0078 15.0977L17.7188 19.8086ZM1.6875 10.5625C1.6875 13.6914 4.18359 16.1875 7.3125 16.1875C10.4062 16.1875 12.9375 13.6914 12.9375 10.5625C12.9375 7.46875 10.4062 4.9375 7.3125 4.9375C4.18359 4.9375 1.6875 7.46875 1.6875 10.5625Z" fill="#414651"/>
            </svg>

        <input
            type="text"
            placeholder="Search Repositories"
            className="flex-1 border-none focus:outline-none ml-2"
        />
        </div>
      </div>

      {/* Scrollable Repository List */}
      <div className="overflow-y-auto w-full">
        <div className="w-full">
          {repositories.map((repo, index) => (
            <div
              key={index}
              className="flex items-center w-full justify-between border border-b-[#D5D7DA] bg-white p-4"
            >
              <div>
                <div className="flex space-x-1">
                    <h3 className="text-lg font-bold">{repo.name}</h3>
                    <span className='text-xs text-[#175CD3] bg-[#EFF8FF] px-2 py-1 rounded-2xl '>{repo.visibility}</span>
                </div>
                <p className="text-sm text-gray-600">
                  {repo.language} • {repo.size} • Updated {repo.updated}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
