// @ts-ignore
import React from 'react'

import Container from '../../presets/Container/Container'
import H0 from '../../headings/H0/H0'
import H1 from '../../headings/H1/H1'
import P1 from '../../headings/P1/P1'
import Icon from '../../display/Icon/Icon'
import CircleButton from '../../buttons/CircleButton/CircleButton'
import styles from './MainHero.module.scss'

type MainHeroProps = {
  background?: string
  title?: string
  titleType?: 'heading' | 'banner'
  subtitle?: string
  image?: string
  imagePosition?: 'left' | 'right'
  imageSize?: 'full' | 'auto'
  card?: JSX.Element | null
  handleGoBack?: () => void | null
  className?: string
}

const MainHero = ({
  background,
  title,
  titleType,
  subtitle,
  image,
  imagePosition,
  imageSize,
  card,
  handleGoBack,
  className
}: MainHeroProps): JSX.Element => {
  const classes: string = [
    'mu-main-hero',
    styles.MainHero,

    ...(imagePosition === 'left' ? [styles.ImageLeft] : []),
    ...(imagePosition === 'right' ? [styles.ImageRight] : []),

    ...(imageSize === 'full' ? [styles.ImageFull] : []),
    ...(imageSize === 'auto' ? [styles.ImageAuto] : []),

    className
  ].join(' ')

  const titleElement: JSX.Element =
    titleType === 'banner' ? (
      <H0
        type="banner"
        weight="bold"
        className={`${styles.Title} ${handleGoBack ? styles.TopSpace : ''}`}
        dangerouslySetInnerHTML={{ __html: title || '' }}
        nestedStyles
      />
    ) : (
      <H1
        type="heading"
        weight="bold"
        className={`${styles.Title} ${handleGoBack ? styles.TopSpace : ''}`}
        dangerouslySetInnerHTML={{ __html: title || '' }}
        nestedStyles
      />
    )

  return (
    <section className={classes} style={{ background }}>
      {handleGoBack && (
        <CircleButton
          className={styles.GoBackBtn}
          color="white"
          icon={<Icon icon="icon-point-left" size={14} />}
          onClick={handleGoBack}
        />
      )}

      <div className={styles.BgImage} style={{ backgroundImage: `url(${image})` }}>
        <Container className={styles.Container} fullWidth={imageSize !== 'auto'}>
          <div className={styles.LeftSide}>
            {title && titleElement}
            {subtitle && <P1 dangerouslySetInnerHTML={{ __html: subtitle }} nestedStyles />}
            {card && <div className={styles.PlatformCardDesc}>{card}</div>}
          </div>

          <div className={styles.RightSide}>
            <img className={styles.Image} src={image} alt="hero-img" />
          </div>

          {card && <div className={styles.PlatformCardMob}>{card}</div>}
        </Container>
      </div>
    </section>
  )
}

MainHero.defaultProps = {
  background: '#fff',
  title: '',
  titleType: 'heading',
  subtitle: '',
  image: '',
  imagePosition: 'right',
  imageSize: 'auto',
  card: null,
  handleGoBack: null,
  className: ''
}

export default MainHero
