import React from "react";
import UAParser from "ua-parser-js";
import withI18next from "../components/withI18next";
import Link from '../components/link';
import Layout from "../components/layout";
import "../styles/download.less";
import ImageGQL from "../components/image-gql";
import HeaderDownloadButtons from "../components/header-download-buttons";
import ScrollUpButton from '../components/scroll-up-button';
import {InstallPack, VideoEditor, VideoReMaker, VideoConverter, MediaPlayer, AudioEditor, AudioConverter, AVSImageConverter} from '../../static/products-info';
import {getDownloadLinks} from "../components/download-links";

const VIDEO_PRODUCTS = [
  {id: "ve", name: "AVS Video Editor", file: "AVSVideoEditor", image: "box-video-editor", info: VideoEditor, badge: "dwn_badge_bestseller"},
  {id: "vc", name: "AVS Video Converter", file: "AVSVideoConverter", image: "box-video-converter", info: VideoConverter, badge: "dwn_badge_most_downloadable"},
  {id: "vr", name: "AVS Video Remaker", file: "AVSVideoReMaker", image: "box-video-remaker", info: VideoReMaker},
  {id: "mp", name: "AVS Media Player", file: "AVSMediaPlayer", image: "box-media-player", info: MediaPlayer},
];

const AUDIO_PRODUCTS = [
  {id: "ae", name: "AVS Audio Editor", file: "AVSAudioEditor", image: "box-audio-editor", info: AudioEditor},
  {id: "ac", name: "AVS Audio Converter", file: "AVSAudioConverter", image: "box-audio-converter", info: AudioConverter, badge: "dwn_badge_free"},
];

const IMAGE_PRODUCTS = [
  {id: "ic", name: "AVS Image Converter", file: "AVSImageConverter", image: "box-image-converter", info: AVSImageConverter, badge: "dwn_badge_free"},
];

class FaqItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOpen: !!props.defaultOpen };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className={"dwn-faq__item" + (isOpen ? " is-open" : "")}>
        <button type="button" className="dwn-faq__question" onClick={this.toggle} aria-expanded={isOpen}>
          <span className="dwn-faq__question-text">{this.props.question}</span>
          <span className="dwn-faq__toggle" aria-hidden="true">{isOpen ? "×" : "+"}</span>
        </button>
        {isOpen && <div className="dwn-faq__answer">{this.props.children}</div>}
      </div>
    );
  }
}

class Download extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      touchDevice: false,
    };
  }

  componentDidMount() {
    const result = new UAParser().getResult();
    this.setState({
      touchDevice: result.device.type === "mobile" || result.device.type === "tablet",
    });
  }

  renderBadge(badge, className) {
    return badge ? <span className={className}>{this.props.t(badge)}</span> : null;
  }

  renderProductCard(product) {
    const { t } = this.props;
    const { info } = product;
    const links = getDownloadLinks(product.file);

    return (
      <div className="dwn-card" key={product.id}>
        <div className="dwn-card__media">
          <ImageGQL className="dwn-card__image" imageName={`${product.image}.png`} objectFit="contain" />
          {product.badge &&
            <div className="dwn-card__badge-slot">
              {this.renderBadge(product.badge, "dwn-badge")}
            </div>
          }
        </div>
        <div className="dwn-card__details">
          <h3 className="dwn-card__name">{t(product.name)}</h3>
          <p className="dwn-card__sizes">{t("dwn_64bit")} {info.size64} {t("dwn_mb")} · {t("dwn_32bit")} {info.size32} {t("dwn_mb")}</p>
          <p className="dwn-card__meta">{t("dwn_current_version")} {info.version}</p>
          <p className="dwn-card__meta">{t("dwn_release_date")} {info.releaseYYYY}-{info.releaseMM}-{info.releaseDD}</p>
        </div>
        <div className="dwn-card__actions">
          <a className="dwn-btn dwn-btn--blue" id={`download-now-${product.id}-x64_downloads`} href={links.x64}>{t("dwn_64bit")}</a>
          <a className="dwn-btn dwn-btn--border" id={`download-now-${product.id}-x86_downloads`} href={links.x86}>{t("dwn_32bit")}</a>
        </div>
      </div>
    );
  }

  renderSection(title, iconClass, products) {
    return (
      <section className="dwn-section">
        <div className="dwn-section__heading">
          <div className={`dwn-section__icon ${iconClass}`}></div>
          <h2 className="dwn-section__title">{title}</h2>
        </div>
        <div className="dwn-section__grid">
          {products.map(product => this.renderProductCard(product))}
        </div>
      </section>
    );
  }

  renderInstallerCell(type, href, size, id, label, version) {
    const { t } = this.props;
    return (
      <div className={`dwn-table__cell dwn-table__cell--installer dwn-table__cell--${type}`}>
        <span className="dwn-table__cell-label">{label}</span>
        <a className={"dwn-btn dwn-btn--table " + (type === "x64" ? "dwn-btn--blue" : "dwn-btn--border")} id={id} href={href}>{t("dwn_download")}</a>
        <span className="dwn-table__size">{size} {t("dwn_mb")}{version ? ` · ${version}` : ""}</span>
      </div>
    );
  }

  renderTableRow(product) {
    const { t } = this.props;
    const links = getDownloadLinks(product.file);
    return (
      <div className="dwn-table__row" key={product.id}>
        <div className="dwn-table__cell dwn-table__cell--program">
          <div className="dwn-table__product">
            <span className="dwn-table__product-name">{t(product.name)}</span>
            {this.renderBadge(product.badge, "dwn-badge dwn-badge--small")}
          </div>
        </div>
        {this.renderInstallerCell("x64", links.x64, product.info.size64, `download-${product.id}-x64_downloads`, t("dwn_os_64"))}
        {this.renderInstallerCell("x86", links.x86, product.info.size32, `download-${product.id}-x86_downloads`, t("dwn_os_32"))}
        {this.renderInstallerCell("xp", links.xp, product.info.sizeXP, `download-${product.id}-xp_downloads`, "Windows XP / Vista", product.info.versionXP)}
      </div>
    );
  }

  render() {
    const { t } = this.props;
    const packLinks = getDownloadLinks("AVSInstallPack");

    return (
      <Layout
        className="download"
        installerAutoSelectIsDisabled
        pageContext={this.props.pageContext}
        t={t}
        title={t("dwn_meta_title")}
        metaDescription={t("dwn_meta_description")}
        metaKeywords=""
      >
        <div id="headerContentWrapper" className="dwn-hero">
          <ImageGQL className="dwn-hero__background" imageName="download-hero.jpg" style={{position: "absolute"}} />
          <div className="dwn-hero__overlay"></div>
          <div className="dwn-hero__content">
            <h1 className="dwn-hero__title">{t("dwn_hero_title")}</h1>
            <p className="dwn-hero__subtitle">{t("dwn_hero_subtitle")}</p>
            {this.state.touchDevice
              ?
              <HeaderDownloadButtons
                t={t}
                mainHref={packLinks.x64}
                backgroundColor="blue"
                className="dwn-hero__coupon"
                id="download-now_downloads"
              />
              :
              <div className="dwn-hero__buttons">
                <a className="dwn-btn dwn-btn--blue dwn-btn--hero" id="download-now-x64_downloads" href={packLinks.x64}>
                  <span className="dwn-btn__light">{t("dwn_windows")}</span> {t("dwn_64bit")}
                </a>
                <a className="dwn-btn dwn-btn--white dwn-btn--hero" id="download-now-x86_downloads" href={packLinks.x86}>
                  <span className="dwn-btn__light">{t("dwn_windows")}</span> {t("dwn_32bit")}
                </a>
              </div>
            }
          </div>
        </div>

        <ScrollUpButton className="ScrollTopWrapper" ButtonClassName="ScrollTopMain" />

        {this.renderSection(t("dwn_video_software"), "dwn-section__icon--video", VIDEO_PRODUCTS)}
        <div className="dwn-sections-row">
          {this.renderSection(t("dwn_audio_software"), "dwn-section__icon--audio", AUDIO_PRODUCTS)}
          {this.renderSection(t("dwn_image_software"), "dwn-section__icon--image", IMAGE_PRODUCTS)}
        </div>

        <div className="dwn-hint-wrapper">
          <div className="dwn-hint">
            <p className="dwn-hint__title">{t("dwn_hint_title")}</p>
            <p className="dwn-hint__text">{t("dwn_hint_text")}</p>
          </div>
        </div>

        <section className="dwn-options">
          <div className="dwn-options__intro">
            <h2 className="dwn-options__title">{t("dwn_table_title")}</h2>
            <p className="dwn-options__text">{t("dwn_table_lead")}</p>
            <ul className="dwn-options__list">
              <li><b>{t("dwn_choice_64_title")}</b> {t("dwn_choice_64_text")}</li>
              <li><b>{t("dwn_choice_32_title")}</b> {t("dwn_choice_32_text")}</li>
              <li><b>{t("dwn_choice_xp_title")}</b> {t("dwn_choice_xp_text")}</li>
            </ul>
          </div>

          <div className="dwn-table">
            <div className="dwn-table__head">
              <div className="dwn-table__cell dwn-table__cell--program">{t("dwn_program")}</div>
              <div className="dwn-table__cell dwn-table__head-col dwn-table__head-col--active">
                <span className="dwn-table__head-title">Windows 7–11</span>
                <span className="dwn-table__head-note">{t("dwn_64bit")}</span>
              </div>
              <div className="dwn-table__cell dwn-table__head-col">
                <span className="dwn-table__head-title">Windows 7–10</span>
                <span className="dwn-table__head-note">{t("dwn_32bit")}</span>
              </div>
              <div className="dwn-table__cell dwn-table__head-col">
                <span className="dwn-table__head-title">Windows XP / Vista</span>
                <span className="dwn-table__head-note">{t("dwn_col_xp_note")}</span>
              </div>
            </div>

            <div className="dwn-table__row dwn-table__row--package">
              <div className="dwn-table__cell dwn-table__cell--program">
                <span className="dwn-table__package-name">{t("dwn_all_package")}</span>
                <span className="dwn-table__package-note">{t("dwn_all_package_note")}</span>
              </div>
              {this.renderInstallerCell("x64", packLinks.x64, InstallPack.size64, "download-pack-x64_downloads", t("dwn_os_64"))}
              {this.renderInstallerCell("x86", packLinks.x86, InstallPack.size32, "download-pack-x86_downloads", t("dwn_os_32"))}
              {this.renderInstallerCell("xp", packLinks.xp, InstallPack.sizeXP, "download-pack-xp_downloads", "Windows XP / Vista", InstallPack.versionXP)}
            </div>

            <div className="dwn-table__group">{t("dwn_video_software")}</div>
            {VIDEO_PRODUCTS.map(product => this.renderTableRow(product))}

            <div className="dwn-table__group">{t("dwn_audio_software")}</div>
            {AUDIO_PRODUCTS.map(product => this.renderTableRow(product))}

            <div className="dwn-table__group">{t("dwn_image_software")}</div>
            {IMAGE_PRODUCTS.map(product => this.renderTableRow(product))}
          </div>
        </section>

        <section className="dwn-faq">
          <h2 className="dwn-faq__title">{t("dwn_read_first")}</h2>
          <div className="dwn-faq__list">
            <FaqItem defaultOpen question={t("dwn_faq1_q")}>
              <p>{t("dwn_faq1_a1_before")}<Link id="how-download-register_downloads" to="/">www.avs4you.com</Link>{t("dwn_faq1_a1_after")}</p>
              <p>{t("dwn_faq1_a2")}</p>
              <a className="dwn-faq__more" target="_blank" rel="noreferrer noopener" id="how-download-read-more_downloads" href={t("downolads-avs4you-guides")}>{t("dwn_read_more")}</a>
            </FaqItem>

            <FaqItem defaultOpen question={t("dwn_faq2_q")}>
              <p>{t("dwn_faq2_a1_before")}<Link id="how-activate-register_downloads" to="/register.aspx">www.avs4you.com/register.aspx</Link>{t("dwn_faq2_a1_after")}</p>
              <p>{t("dwn_faq2_a2")}</p>
              <a className="dwn-faq__more" target="_blank" rel="noreferrer noopener" id="how-activate-read-more_downloads" href={t("downloads-avs4you-guides-how-to-activate-the-avs4you-software")}>{t("dwn_read_more")}</a>
            </FaqItem>

            <FaqItem question={t("dwn_faq3_q")}>
              <p>{t("dwn_faq3_a1")}</p>
              <p>{t("dwn_faq3_a2")}</p>
              <a className="dwn-faq__more" target="_blank" rel="noreferrer noopener" id="how-reinstall-read-more_downloads" href={t("downloads-avs4you-guides-how-to-reinstall-avs4you-programs")}>{t("dwn_read_more")}</a>
            </FaqItem>

            <FaqItem question={t("dwn_faq4_q")}>
              <p>{t("dwn_faq4_a1")}</p>
              <a className="dwn-faq__more" target="_blank" rel="noreferrer noopener" id="how-uninstall-read-more_downloads" href={t("downloads-avs4you-guides-How-to-uninstall-AVS4YOU-programs")}>{t("dwn_read_more")}</a>
            </FaqItem>
          </div>
        </section>
      </Layout>
    );
  }
};

export default withI18next({ ns: "common" })(Download);
