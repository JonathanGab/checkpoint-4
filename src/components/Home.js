import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';

import API from '../APIclient';
import CardMedia from '@material-ui/core/CardMedia';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  carousel: {
    display: 'flex',
    objectFit: 'cover',
    cursor: 'pointer',
    backgroundSize: 'contain',
    justifyContent: 'center',
    width: '100%',
    minHeight: 350,

    marginTop: 50,
  },
  carouselStyle: {
    display: 'flex',
    width: '100%',

    objectFit: 'cover',
  },
}));
export default function Home() {
  const [pictures, setPictures] = useState([]);
  const { carousel, carouselStyle } = useStyles();
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'center' });

  useEffect(() => {
    API.get('/pictures').then((res) => {
      setPictures(res.data);
    });
  });
  return (
    <div>
      <div>
        <Carousel
          className={carousel}
          swipe={true}
          interval={5000}
          fullHeightHover={false}
          animation="fade"
          stopAutoPlayOnHover={true}
          navButtonsAlwaysVisible={true}
        >
          {pictures.map((picture) => (
            <Box key={picture.id}>
              <CardMedia
                className={carouselStyle}
                classes={mediaStyles}
                image={picture.picture}
              ></CardMedia>
            </Box>
          ))}
        </Carousel>
      </div>
      <div className="mt-16">
        <p className="text-center">
          {' '}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          beatae et amet vel ab dicta voluptatem, totam id tempora iste soluta
          repudiandae enim suscipit omnis? Magni quas dolorem non delectus.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          reiciendis magnam quibusdam doloremque illum. Voluptate hic enim alias
          non? Dicta, exercitationem commodi soluta laboriosam excepturi
          voluptatem pariatur eius corporis, quasi enim labore alias laborum
          recusandae! Explicabo nam aspernatur qui repellendus dolor sequi
          exercitationem quod vitae repellat pariatur quisquam, necessitatibus
          nihil aperiam officiis quibusdam minus saepe totam ea iusto impedit
          similique dicta consequatur neque. Commodi, doloremque porro ea vitae,
          eius perferendis, ut sunt laborum fugiat eaque eligendi distinctio
          error. Tempora quos accusamus temporibus dicta eos sed ullam,
          consectetur, veritatis facere earum enim aliquam, minus ab dolor.
          Aliquid ab, odio dolorum ipsa mollitia excepturi laboriosam accusamus
          cumque necessitatibus provident ducimus numquam nemo quaerat optio
          modi inventore porro aliquam voluptas repellendus! Sapiente cum
          obcaecati consequuntur sint quae minus odio! Nulla quidem ad animi
          fuga corrupti natus, quis commodi voluptate iure nisi doloribus
          consectetur, ab voluptatum laborum dolor consequatur inventore optio
          eligendi assumenda? Sapiente inventore ad et non ut distinctio, aut,
          delectus enim velit voluptates ducimus libero vitae dignissimos,
          obcaecati cumque quos expedita ea vero culpa. Dignissimos odio aut cum
          iusto ab iure optio, earum temporibus officiis. Ut eligendi commodi
          minus at, corporis praesentium temporibus voluptates asperiores beatae
          aliquam quaerat totam, nihil tempore. Ut esse ipsam, quibusdam dicta
          blanditiis labore laboriosam architecto nesciunt facilis dolorum
          distinctio reiciendis vel nostrum. Quibusdam delectus deserunt
          asperiores soluta animi repudiandae a minima reprehenderit voluptas
          cupiditate eos dicta et nobis dignissimos, id iste, doloribus officiis
          veritatis, deleniti tenetur dolores numquam labore quia voluptatem?
          Earum, aliquid ratione dolorem quod itaque impedit ex laboriosam id
          molestiae esse! Fugiat ab culpa optio earum fugit dolores, sequi
          architecto natus alias dolorum cum? Tempora maiores dolores nostrum
          placeat fuga quam quisquam neque architecto consequatur. Ipsum autem
          impedit dolor soluta repellat illo debitis molestiae? Earum, incidunt
          eveniet. Aut error mollitia voluptas numquam nihil beatae reiciendis.
        </p>
      </div>
    </div>
  );
}
