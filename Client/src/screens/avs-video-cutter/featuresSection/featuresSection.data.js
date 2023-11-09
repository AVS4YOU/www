import slide1 from '../../../images/avs-video-cutter/features-section1.png'
import slide12x from '../../../images/avs-video-cutter/features-section1@2x.png'

import slide2 from '../../../images/avs-video-cutter/features-section2.png'
import slide22x from '../../../images/avs-video-cutter/features-section2@2x.png'

import slide3 from '../../../images/avs-video-cutter/features-section3.png'
import slide32x from '../../../images/avs-video-cutter/features-section3@2x.png'

const features = [
    {
        id: 1,
        title: 'Video Cropper',
        desc: `Remove black bars from video highlighting the most striking and important elements. 
        Additionally, you can change the dimensions of a video file so that it fits certain frame proportions.`,
        img: {
            img1x: slide1,
            img2x: slide12x,
        }
    },
    {
        id: 2,
        title: 'Video Splitter',
        desc: `Split videos regardless of their video size and formats. 
        Cut your clip into smaller sections without losing any frames in the process. 
        The clips can be trimmed or edited separately later.`,
        img: {
            img1x: slide2,
            img2x: slide22x,
        }
    },
    {
        id: 3,
        title: 'Video Merger',
        desc: `Combine several video files together or merge them into one to make a full-length movie. 
        Save it to any format supported by all PC’s, mobile phones, TVs and multimedia systems.`,
        img: {
            img1x: slide3,
            img2x: slide32x,
        }
    },
]

export default features
