import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../text';
import ImageGQL from '../image-gql';
import bgOrange from '../../images/main-page/back_picture_orange.svg';

const BLUE = '#157BF2';
const BLUE_HOVER = '#0F6AD6';

const StyledBlock = styled.div`
    padding-top: 180px;

    &:first-child {
        padding-top: 0;
    }

    .aiNew {
        flex: none;
        padding: 4px 10px;
        background-color: #FE9235;
        color: #fff;
        font-weight: 700;
        line-height: 24.375px;
    }

    .aiHead {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .aiTitle,
    .aiFeatureTitle {
        line-height: 38.125px;
    }

    .aiIntro,
    .aiFeatureText {
        line-height: 24.375px;
    }

    .aiIntroInline {
        font-weight: 700;
    }

    .aiLink {
        color: ${BLUE};
        font-weight: 400;
        text-decoration: underline;

        &:hover {
            text-decoration: none;
        }
    }

    .aiFeature {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .aiNote {
        line-height: 20px;
    }

    .aiButton {
        display: inline-flex;
        align-items: center;
        height: 57px;
        padding: 0 32px;
        border-radius: 3px;
        background-color: ${BLUE};
        color: #fff;
        font-family: 'Open Sans', sans-serif, Arial;
        font-size: 18px;
        font-weight: 600;
        line-height: 24.375px;
        text-decoration: none;

        &:hover {
            background-color: ${BLUE_HOVER};
        }
    }

    .aiTextLink {
        font-family: 'Open Sans', sans-serif, Arial;
        font-size: 18px;
        line-height: 24.375px;
        color: ${BLUE};
        text-decoration: underline;

        &:hover {
            text-decoration: none;
        }
    }

    /* text + image on the right */
    &.split {
        display: flex;
        align-items: center;

        .aiText {
            flex: 0 1 496px;
            min-width: 0;
            margin-left: 70px;
        }

        .aiHeadBlock {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding-bottom: 24px;

            &.solo {
                gap: 24px;
                padding-bottom: 0;
            }
        }

        .aiHead.inline {
            gap: 20px;
        }

        /* heading + one paragraph (Audio Converter): the heading row may run
           past the 496px text column, as in the design (badge + 496px title) */
        &.solo .aiText {
            flex-basis: 573px;
        }

        &.solo .aiIntro {
            max-width: 496px;
        }

        .aiFeatures {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .aiNote {
            padding-top: 12px;
        }

        .aiAction {
            padding-top: 32px;
        }

        .aiMedia {
            flex: 1 1 722px;
            min-width: 0;
            margin-left: 60px;
        }

        .aiImage {
            max-width: 722px;
            margin-left: auto;
            position: relative;
            z-index: 0;
            border: 1px solid #ECEFF5;

            &:before {
                content: '';
                position: absolute;
                left: -36px;
                top: -36px;
                width: 206px;
                height: 206px;
                background-image: url(${bgOrange});
                background-size: 100%;
                background-repeat: no-repeat;
                z-index: -1;
            }
        }
    }

    /* full-width: heading, two text columns, wide image, link */
    &.wide {
        max-width: 1300px;
        margin: 0 auto;

        .aiHeadBlock {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding-bottom: 32px;
        }

        .aiColumns {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 96px;
            padding-bottom: 40px;
        }

        .aiColumn {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .aiFeature {
            min-height: 100px;
        }

        .aiAction {
            padding-top: 40px;
            text-align: center;
        }
    }

    @media (max-width: 1500px) {
        padding-top: 120px;
    }

    @media (max-width: 1300px) {
        &.split .aiText {
            margin-left: 10px;
        }

        &.split .aiMedia {
            margin-left: 40px;
        }
    }

    @media (max-width: 1050px) {
        &:first-child {
            padding-top: 120px;
        }

        .aiTitle,
        .aiFeatureTitle {
            font-size: 24px;
            line-height: 32px;
        }

        .aiIntro,
        .aiFeatureText,
        .aiTextLink {
            font-size: 16px;
            line-height: 22px;
        }

        &.split .aiText,
        &.split.solo .aiText {
            flex-basis: 45%;
        }

        &.wide .aiColumns {
            column-gap: 40px;
        }
    }

    @media (max-width: 780px) {
        padding-top: 50px;

        &:first-child {
            padding-top: 50px;
        }

        &.split {
            display: block;

            .aiText {
                max-width: 500px;
                margin: 0 auto;
            }

            .aiMedia {
                max-width: 500px;
                margin: 40px auto 0;
            }

            .aiImage {
                margin: 0 auto;

                &:before {
                    content: none;
                }
            }
        }

        &.wide .aiColumns {
            grid-template-columns: 1fr;
            row-gap: 20px;
        }

        &.wide .aiFeature {
            min-height: 0;
        }

        /* like the other rows on mobile: section heading and button centred */
        .aiHead:not(.inline) {
            justify-content: center;
            text-align: center;
        }

        &.split .aiAction {
            text-align: center;
        }
    }
`;

const Feature = ({ title, text, as }) => (
    <div className="aiFeature">
        <Text className="aiFeatureTitle" as={as} fontSize={28} fontWeight={700} color="#000000">{title}</Text>
        <Text className="aiFeatureText" fontSize={18} fontWeight={400} color="#555555">{text}</Text>
    </div>
);

const AiPluginsBlock = (props) => {
    const {
        id, layout, newText, title, titleAs, intro, introInline,
        features, featureAs, note, imageName, imageAlt,
        marketplaceText, marketplaceHref, marketplaceId, marketplaceAsLink,
    } = props;

    const solo = features.length === 0 && !note;
    const newBadge = newText && <Text className="aiNew" as="span" fontSize={18}>{newText}</Text>;

    const head = introInline
        ? (
            <div className="aiHeadBlock">
                <div className="aiHead inline">
                    {newBadge}
                    <Text className="aiIntro aiIntroInline" fontSize={18} fontWeight={700} color="#555555">{intro}</Text>
                </div>
            </div>
        )
        : (
            <div className={solo ? 'aiHeadBlock solo' : 'aiHeadBlock'}>
                <div className="aiHead">
                    {newBadge}
                    {title && <Text className="aiTitle" as={titleAs} fontSize={28} fontWeight={700} color="#000000">{title}</Text>}
                </div>
                {intro && <Text className="aiIntro" fontSize={18} fontWeight={400} color="#555555">{intro}</Text>}
            </div>
        );

    const noteNode = note && <Text className="aiNote" fontSize={14} fontWeight={400} color="#666666">{note}</Text>;

    const action = marketplaceText && marketplaceHref && (
        <div className="aiAction">
            <a
                id={marketplaceId}
                className={marketplaceAsLink ? 'aiTextLink' : 'aiButton'}
                href={marketplaceHref}
                target="_blank"
                rel="noreferrer noopener"
            >
                {marketplaceText}
            </a>
        </div>
    );

    const renderFeatures = (list) => list.map((feature) => (
        <Feature key={feature.title} title={feature.title} text={feature.text} as={featureAs} />
    ));

    if (layout === 'wide') {
        const half = Math.ceil(features.length / 2);
        const right = features.slice(half);
        const last = right.length > 0 ? right[right.length - 1] : null;
        return (
            <StyledBlock className="wide" id={id}>
                {head}
                <div className="aiColumns">
                    <div className="aiColumn">{renderFeatures(features.slice(0, half))}</div>
                    <div className="aiColumn">
                        {renderFeatures(right.slice(0, -1))}
                        {/* the footnote belongs to the last feature, so it sits right under it */}
                        {last && (
                            <div>
                                <Feature title={last.title} text={last.text} as={featureAs} />
                                {noteNode}
                            </div>
                        )}
                    </div>
                </div>
                {imageName && <ImageGQL className="aiWideImage" imageName={imageName} alt={imageAlt || title} />}
                {action}
            </StyledBlock>
        );
    }

    return (
        <StyledBlock className={solo ? 'split solo' : 'split'} id={id}>
            <div className="aiText">
                {head}
                {features.length > 0 && <div className="aiFeatures">{renderFeatures(features)}</div>}
                {noteNode}
                {action}
            </div>
            <div className="aiMedia">
                <div className="aiImage">
                    <ImageGQL imageName={imageName} alt={imageAlt || title} />
                </div>
            </div>
        </StyledBlock>
    );
};

AiPluginsBlock.propTypes = {
    id: PropTypes.string,
    layout: PropTypes.oneOf(['split', 'wide']),
    newText: PropTypes.string,
    title: PropTypes.string,
    titleAs: PropTypes.string,
    intro: PropTypes.node,
    introInline: PropTypes.bool,
    features: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        text: PropTypes.string,
    })),
    featureAs: PropTypes.string,
    note: PropTypes.string,
    imageName: PropTypes.string,
    imageAlt: PropTypes.string,
    marketplaceText: PropTypes.string,
    marketplaceHref: PropTypes.string,
    marketplaceId: PropTypes.string,
    marketplaceAsLink: PropTypes.bool,
};

AiPluginsBlock.defaultProps = {
    layout: 'split',
    titleAs: 'h3',
    introInline: false,
    features: [],
    featureAs: 'h4',
    marketplaceHref: 'https://avs4you.github.io/',
    marketplaceAsLink: false,
};

export default AiPluginsBlock;
