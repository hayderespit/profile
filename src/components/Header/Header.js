import React, { PureComponent } from 'react';
import { images, language } from '../../config/constants';
import './Header.css';
import { Row, Col } from 'react-flexbox-grid';

class Header extends PureComponent {
  render() {
    const { lang } = this.props;
    return (
      <Row className={'wrap-profile'} center="xs">
        <Col xs className={'language'}>
          {lang === 'es' ? (
            <img
              onClick={this.props.changeLang}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC"
              title="English"
              alt="English"
            />
          ) : (
            <img
              onClick={this.props.changeLang}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAF1SURBVHjaYny/neHfPwYo+Adig7gQxh8MxMAAEEAsQAkh/Wqg4v9A7n8g+vuf4S9Q8v9/kJL/DL//A8l/v4Hc//9/39uyCSCAWMAmA9lPgUoZ/v0FskB6QCp+w8hfYPSbkV0WaAlAALGAzf6PqvoXyLx/YKX/f8EYvxn+/f7ziwEggFgY/gC1/GVg+POf8Q+IBLqBEWwwiAHWAGQwgDUwAPUwAAQQI4Pg8dIOhYcvf/35+//3H6Ah/8EIxPj1G0j++wVh//mrKMF+aNJJgABiYfjB8OcPEAGF/sPIf79+Q7QB9fz/hWQQMPgAAgik4edvhu+/GP78Zvj9h+EXGP0GawAxIFyQiYy/foHCByCAWK7/txS7kfP73v3/v3+BTf79DygDJIFcoD6ws0CCf/+wKSufZzgFEEAsbAwMzH9+MEmKgB30C0SCpIHu+A1hAw3/9/ff/79//v/9wcPAABBAjHcZwOHEwPALFL8g9AeJRENAABBgALCAa8EvfPnLAAAAAElFTkSuQmCC"
              title="Español"
              alt="Español"
            />
          )}
        </Col>
        <Col xs={12}>
          <img
            className={'img-profile'}
            src={images.profile}
            alt={'Hayder Espinoza'}
            width={200}
            height={200}
          />
          <h1 className={'name'}>Hayder Espinoza B</h1>
          <h2 className={'work'}>{language[lang].work}</h2>
        </Col>
      </Row>
    );
  }
}

Header.propTypes = {};

export default Header;
