import {connect} from 'react-redux';
import MyInfoPage from '../../main/MyInfoPage.js';
import AppAudioPlayWrapper from '../../app/audio/AppAudioPlay.js';
import AppAudioPlayDataAction from '../actions/AppAudioPlayDataAction.js';

const mapStateToProps = state => {
    return {
        audio_play: state.AppAudioPlayDataReducer.audio_play
    }
}

const mapDispatchToProps = dispatch => {
    return {
        audioPlayCreater: (audio_play) => {
            dispatch(AppAudioPlayDataAction(audio_play))
        }
    }
}

const AppAudioPlayDataContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppAudioPlayWrapper);

export default AppAudioPlayDataContainers;

