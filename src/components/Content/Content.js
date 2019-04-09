import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import './Content.css';
import { language } from '../../config/constants';
import Skill from '../Skill/Skill';

class Content extends PureComponent {
    render() {
        const { lang } = this.props;
        return (
            <Row center="xs" className={'wrap-content'}>
                <Col xs={12} md={9}>
                    <Row>
                        <Col xs={12} md={6}>
                            <Row>
                                <Col xs={12} className={'wrap-card'}>
                                    <div className="card">
                                        <h3 className={'title'}>
                                            {' '}
                                            {language[lang].profile}{' '}
                                        </h3>
                                        <p>
                                            {language[lang].profile_description}
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={12} className={'wrap-card'}>
                                    <div className="card">
                                        <h3 className={'title'}>
                                            {' '}
                                            {language[lang].education}{' '}
                                        </h3>
                                        <h4>
                                            Ins. Educativa Felipe Santiago
                                            Escobar
                                        </h4>
                                        <span>{language[lang].secundaria}</span>
                                        <h4>SENA</h4>
                                        <span>{language[lang].redes}</span>
                                        <h4>Tecnologica de Bolívar</h4>
                                        <span>
                                            {language[lang].tecnologia_sistema}
                                        </span>
                                    </div>
                                </Col>
                                <Col xs={12} className={'wrap-card'}>
                                    <div className="card">
                                        <h3 className={'title'}>
                                            {' '}
                                            {language[lang].skills}{' '}
                                        </h3>
                                        <Skill name={'Html5'} total={5} />
                                        <Skill
                                            name={'Css3 (Stylus - Sass)'}
                                            total={5}
                                        />
                                        <Skill name={'Js'} total={5} />
                                        <Skill name={'React Js'} total={4} />
                                        <Skill
                                            name={'React native'}
                                            total={4}
                                        />
                                        <Skill name={'Vue Js'} total={2} />
                                        <Skill name={'Angular'} total={3} />
                                        <Skill name={'Ionic'} total={3} />
                                        <Skill name={'PHP'} total={4} />
                                        <Skill
                                            name={'Laravel framework'}
                                            total={4}
                                        />
                                        <Skill name={'Android'} total={2} />
                                        <Skill name={'Sql server'} total={3} />
                                        <Skill name={'Mysql'} total={3} />
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={12} md={6}>
                            <Row>
                                <Col xs={12} className={'wrap-card'}>
                                    <div className="card">
                                        <h3 className={'title'}>
                                            {' '}
                                            {language[lang].contact}{' '}
                                        </h3>
                                        <p>
                                            <span>Turbaco, Bolívar</span>
                                            <br />
                                            <span>315 8163730</span>
                                            <br />
                                            <span>hayderespit@gmail.com</span>
                                            <br />
                                            <span>hayderespit@hotmail.com</span>
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={12} className={'wrap-card'}>
                                    <div className="card">
                                        <h3 className={'title'}>
                                            {' '}
                                            {language[lang].experience}{' '}
                                        </h3>
                                        <h4>Latinosoft PSA</h4>
                                        <span>{language[lang].work}</span>
                                        <h4>Net-Technlogy</h4>
                                        <span>{language[lang].work}</span>
                                        <h4>Dismel ltda</h4>
                                        <span>{language[lang].work}</span>
                                        <h4>Big ideas</h4>
                                        <span>{language[lang].work}</span>
                                        <h4>Innovar</h4>
                                        <span>{language[lang].work}</span>
                                        <h4>Nativapps</h4>
                                        <span>{language[lang].work}</span>
                                        <h4>CondorLabs</h4>
                                        <span>{language[lang].work}</span>
                                    </div>
                                </Col>
                                <Col xs={12} className={'wrap-card'}>
                                    <div className={'card'}>
                                        <h3 className={'title'}>
                                            {' '}
                                            {
                                                language[lang].recent_projects
                                            }{' '}
                                        </h3>
                                        <ul>
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="https://www.serviport.com.co/"
                                                >
                                                    Serviport
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="http://www.inmobiliariasantodomingocartagena.com/"
                                                >
                                                    Inmobiliaria Santo Domingo
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="http://www.canvastownhouse.com/galeria.html"
                                                >
                                                    Canvas
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="http://gestion.rys.com.co/"
                                                >
                                                    RYS
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    target="_blank"
                                                    href="https://play.google.com/store/apps/details?id=com.stadioapp"
                                                >
                                                    StadioApp
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

Content.propTypes = {};

export default Content;
