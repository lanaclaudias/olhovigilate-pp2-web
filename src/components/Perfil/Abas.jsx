import React from 'react';

const Abas = ({ color }, ) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex justify-center flex-wrap">
        <div className="flex-1 w-[350px]">
          <ul
            className="max-w-[500px] m-auto flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px flex-1 mr-2  last:mr-0 text-center">
              <a
                className={
                  'text-xs text-black font-bold px-5 py-3 rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-black bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Feed
              </a>
            </li>
            <li className="-mb-px  mr-2 last:mr-0 flex-1 text-center">
              <a
                className={
                  'text-xs font-bold text-black px-5 py-3 rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-black bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Ocorrências
              </a>
            </li>
            <li className="-mb-px  mr-2 last:mr-0 flex-1 text-center">
              <a
                className={
                  'text-xs text-black font-bold px-5 py-3 rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-black bg-' + color + '-600'
                    : 'text-' + color + '-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Seguidores
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white mb-6 rounded">
            <div className="px-4 py-5">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <p className="text-black">
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <p className="text-black">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <p className="text-black">
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Abas color="teal" />;
    </>
  );
}
