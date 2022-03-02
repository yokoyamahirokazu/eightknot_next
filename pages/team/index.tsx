import Image from 'next/image';
import Content from '../../components/lower';
import { client } from '../../libs/client';
import Styles from '../../styles/components.module.css';
import Breadcrumb from '../../components/breadcrumbs';
import CommonMeta from '../../components/CommonMeta';
import dynamic from 'next/dynamic';
const ScrollRevealContainer = dynamic(import('../../ScrollRevealContainer'), { ssr: false });
import { FiInfo, FiX } from 'react-icons/fi';
import { useState } from 'react';
import Modal from 'react-modal';
import React from 'react';

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 9999999999,
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '94%',
    maxWidth: '640px',
    maxHeight: '540px',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#__next');

interface Article {
  id: string;
  name: string;
  post: string;
  profile: string;
  nameJP: string;
  view?: string;
  image: {
    url: string;
  };
}
interface Contents {
  contents: Article[];
}

export default function Team({
  TeamItem,
}: {
  TeamItem: {
    id: string;
    name: string;
    post: string;
    profile: string;
    nameJP: string;
    view?: string;
    image: {
      url: string;
    };
  }[];
}): JSX.Element {
  const team_1 = TeamItem.filter((output) => {
    return output.view == '1段目';
  });
  const team_2 = TeamItem.filter((output) => {
    return output.view == '2段目';
  });
  const team_3 = TeamItem.filter((output) => {
    return output.view == '3段目';
  });
  const team_4 = TeamItem.filter((output) => {
    return output.view == '4段目';
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <>
      <Content>
        <CommonMeta title='About' description='当社についてご紹介するページです。' />

        <Breadcrumb pageTitle='About' />
        <section>
          <div className={`${Styles.team_page_inner} ${Styles.news_flex}`}>
            <div className={Styles.news_flex_left}>
              <div className={Styles.headline_box}>
                <ScrollRevealContainer move='right'>
                  <h2 className={Styles.headline}>
                    <FiInfo />

                    <span className={Styles.headline_txt}>Team</span>
                  </h2>
                </ScrollRevealContainer>
                <ScrollRevealContainer move='right'>
                  <p className={Styles.sub_headline}>
                    Introduce
                    <br />
                    Our Team Staff
                  </p>
                </ScrollRevealContainer>
              </div>
            </div>
            <div className={Styles.news_flex_right}>
              <div className={Styles.team_page}>
                <ul className={Styles.team_list}>
                  {team_1.map((team) => (
                    <li
                      key={team.id}
                      onClick={() => {
                        setModalData(team);
                        setModalIsOpen(true);
                      }}
                    >
                      <ScrollRevealContainer move='bottom'>
                        <div className={`${Styles.img_circle} ${Styles.team_list_img}`}>
                          <div className={Styles.img_circle_inner}>
                            <Image
                              src={team.image.url}
                              alt={team.name}
                              layout={'fill'}
                              objectFit={'cover'}
                            />
                          </div>
                        </div>
                        <div className={Styles.team_list_info}>
                          <h3 className={Styles.team_list_name}>
                            {team.nameJP}
                            <span>{team.name}</span>
                          </h3>
                          <p className={Styles.team_list_post}>{team.post}</p>
                        </div>
                      </ScrollRevealContainer>
                    </li>
                  ))}
                </ul>

                <ul className={Styles.team_list}>
                  {team_2.map((team) => (
                    <li
                      key={team.id}
                      onClick={() => {
                        setModalData(team);
                        setModalIsOpen(true);
                      }}
                    >
                      <ScrollRevealContainer move='bottom'>
                        <div className={`${Styles.img_circle} ${Styles.team_list_img}`}>
                          <div className={Styles.img_circle_inner}>
                            <Image
                              src={team.image.url}
                              alt={team.name}
                              layout={'fill'}
                              objectFit={'cover'}
                            />
                          </div>
                        </div>
                        <div className={Styles.team_list_info}>
                          <h3 className={Styles.team_list_name}>
                            {team.nameJP}
                            <span>{team.name}</span>
                          </h3>
                          <p className={Styles.team_list_post}>{team.post}</p>
                        </div>
                      </ScrollRevealContainer>
                    </li>
                  ))}
                </ul>

                <ul className={Styles.team_list}>
                  {team_3.map((team) => (
                    <li
                      key={team.id}
                      onClick={() => {
                        setModalData(team);
                        setModalIsOpen(true);
                      }}
                    >
                      <ScrollRevealContainer move='bottom'>
                        <div className={`${Styles.img_circle} ${Styles.team_list_img}`}>
                          <div className={Styles.img_circle_inner}>
                            <Image
                              src={team.image.url}
                              alt={team.name}
                              layout={'fill'}
                              objectFit={'cover'}
                            />
                          </div>
                        </div>
                        <div className={Styles.team_list_info}>
                          <h3 className={Styles.team_list_name}>
                            {team.nameJP}
                            <span>{team.name}</span>
                          </h3>
                          <p className={Styles.team_list_post}>{team.post}</p>
                        </div>
                      </ScrollRevealContainer>
                    </li>
                  ))}
                </ul>

                {modalData && (
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={modalStyle}
                  >
                    <div className={Styles.modal_inner}>
                      <div className={Styles.modal_flex}>
                        <div className={Styles.modal_img}>
                          <Image
                            src={modalData.image.url}
                            alt={modalData.name}
                            layout={'fill'}
                            objectFit={'cover'}
                          />
                        </div>
                        <div className={Styles.modal_info}>
                          <h3 className={Styles.team_list_name}>
                            {modalData.nameJP}
                            <span>{modalData.name}</span>
                          </h3>
                          <p className={Styles.team_list_post}>{modalData.post}</p>
                          <div
                            className={Styles.modal_info_profile}
                            dangerouslySetInnerHTML={{
                              __html: `${modalData.profile}`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={Styles.modal_close}>
                      <button onClick={() => setModalIsOpen(false)}>
                        <FiX />
                      </button>
                    </div>
                  </Modal>
                )}

                <ul className={Styles.team_list_ver}>
                  {team_4.map((team) => (
                    <li key={team.id}>
                      <ScrollRevealContainer move='bottom'>
                        <div className={`${Styles.img_circle} ${Styles.team_list_img}`}>
                          <div className={Styles.img_circle_inner}>
                            <Image
                              src={team.image.url}
                              alt={team.name}
                              layout={'fill'}
                              objectFit={'cover'}
                            />
                          </div>
                        </div>
                        <div className={Styles.team_list_info}>
                          <h3 className={Styles.team_list_name}>
                            {team.nameJP}
                            <span>{team.name}</span>
                          </h3>
                          <p className={Styles.team_list_post}>{team.post}</p>
                        </div>
                      </ScrollRevealContainer>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={Styles.team_img}>
            <Image alt='アイキャッチ' src='/team_image.png' layout={'fill'} objectFit={'cover'} />
          </div>
        </section>
      </Content>
    </>
  );
}

export const getStaticProps = async () => {
  const teamData: Contents = await client.get({ endpoint: 'team' });

  return {
    props: {
      TeamItem: teamData.contents,
    },
  };
};
