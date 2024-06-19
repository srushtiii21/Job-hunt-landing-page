import React from 'react';

function Freelancer() {
  return (
    <>
      <div className="card w-full bg-base-1/4">
        <div className="px-80 py-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center p">
            For Freelancers and <br />Agencies
          </h1>
          <p className="text-base text-gray-700 text-center">
            Prilans provides efficient tools to help you run your business,<br />
            allowing you to focus on your creative activities.
          </p>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="card w-1/2 h-1/2 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Activity</h2>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <svg
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                    clipRule="evenodd"
                  />
                </svg>
                Thursday, Jan 11, 2024{' '}
                <span>
                  {' '}
                  <button className="btn btn-error justify-end">Pause</button>
                </span>
              </div>
              <h2 className="font-bold text-3xl">Total time <br className="font-bold" />8hr 25min</h2>
              <button className="btn btn-default">Show more log details</button>
              <h2 className="font-bold text-left text-2xl">Time tracking</h2>
              <p>
                Easy to use and loved by teams. No spying or <br />
                activity monitoring. Just log the time spent to <br />
                bill it fairly. Track anywhere using the web <br />
                app.
              </p>
            </div>
          </div>

          <div className="card w-1/2 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-bold align-text-bottom">Bill and Get Paid</h2>
              <p className="font-semibold">
                Incredibly flexible with any currency. Issue <br />
                invoices on behalf of various legal entities <br />
                and with payment methods that fit you and <br />
                the client best.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between py-7 px-7">
          <div className="card w-1/3 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Project 1</h3>
                  <div className="flex flex-col gap-4 w-52">
                    <div className="skeleton h-4 w-21"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Project 2</h2>
                  <div className="flex flex-col gap-4 w-52">
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
              </div>

              <h2 className="card-title">Projects</h2>
              <p>
                Organize your work, and connect task <br />
                management tools like Trello, Linear, etc.
              </p>
            </div>
          </div>

          <div className="card w-1/3 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Proposal 1</h3>
                  <div className="flex flex-col gap-4 w-52">
                    <div className="skeleton h-4 w-21"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Proposal 2</h3>
                  <div className="flex flex-col gap-4 w-52">
                    <div className="skeleton h-4 w-21"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
              </div>

              <h2 className="card-title">Proposals</h2>
              <p>
                Create and share winning proposals. <br />
                Quickly highlight relevant projects.
              </p>
            </div>
          </div>

          <div className="card w-1/3 bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Contract 1</h3>
                  <div className="flex flex-col gap-4 w-52">
                    <div className="skeleton h-4 w-21"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
              </div>

              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">Contract 2</h3>
                  <div className="flex flex-col gap-4 w-52">
                    <div className="skeleton h-4 w-21"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
              </div>

              <h2 className="card-title">Documents</h2>
              <p>
                Create legal documents such <br />
                as contracts and NDAs based <br />
                on templates from legal experts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freelancer;
