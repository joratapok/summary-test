import React from 'react';
import {MapContainer, StyledMap} from './MapStyles';
import {YMaps, withYMaps} from '@pbe/react-yandex-maps';
import {YMapsApi} from '@pbe/react-yandex-maps/typings/util/typing';
import {useAppSelector} from '../../hooks/redux';

export const MapComponent = () => {
  // @ts-ignore
  const PositionedMap = React.memo(({ymaps}: {yamps: YMapsApi}) => {
    const [coords, setCoords] = React.useState([55.751574, 37.573856]);
    const {location} = useAppSelector((state) => state.summarySlice);

    const onLoad = (location: string) => {
      ymaps.geocode(location).then((res: any) => {
        const coordinates = res?.geoObjects?.get(0)?.geometry?.getCoordinates();
        if (coordinates) {
          setCoords(coordinates);
        }
      });
    };

    React.useEffect(() => {
      onLoad(location);
    }, [location]);

    return (
      <StyledMap
        state={{
          center: coords,
          zoom: 12,
        }}
      />
    );
  });

  const ConnectedMap = React.useMemo(() => {
    return withYMaps(PositionedMap, true);
  }, [PositionedMap]);

  return (
    <MapContainer>
      <YMaps
        query={{
          ns: 'use-load-option',
          apikey: '5d2e1d88-911c-45fa-98b9-fce02355c2ae',
          load: 'geocode',
        }}
      >
        {/*// @ts-ignore*/}
        <ConnectedMap />
      </YMaps>
    </MapContainer>
  );
};
