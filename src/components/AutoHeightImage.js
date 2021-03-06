import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { Content } from 'native-base';
import PropTypes from 'prop-types';

function AutoHeightImage({ source, style }) {
  const [realHeight, setRealHeight] = useState(100);
  const [realWidth, setRealWidth] = useState(100);
  const [targetWidth, setTargetWidth] = useState(100);

  useEffect(() => {
    const setSize = (width, height) => {
      if (width === 0 || height === 0) return;
      const targetHeight = Math.floor(targetWidth * height / width);
      setRealWidth(targetWidth);
      setRealHeight(targetHeight);
    };
    // for source with require image from local, it is a number
    if (Number.isInteger(source)) {
      const { width, height } = Image.resolveAssetSource(source);
      setSize(width, height);
    } else {
      Image.getSize(source.uri, (width, height) => {
        setSize(width, height);
      });
    }
  }, [source, targetWidth]);


  return (
    <Content
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        const tWidth = Math.floor(width);
        if (targetWidth !== tWidth) {
          setTargetWidth(tWidth);
        }
      }}
      style={style}
    >
      <Image
        source={source}
        style={{ height: realHeight, width: realWidth }}
      />
    </Content>
  );
}

AutoHeightImage.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.objectOf(PropTypes.string), // then how to define a type like {uri:string}
  ]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

AutoHeightImage.defaultProps = {
  style: {},
};

export default AutoHeightImage;
