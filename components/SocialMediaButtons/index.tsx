import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialMediaButtons = () => {
    return (
        <div className="icons divide-x py-2">
            <a href="https://github.com">
                <GitHubIcon className="icon" />
            </a>
            <a href="https://www.linkedin.com">
                <LinkedInIcon className="icon" />
            </a>
        </div>
    )
}

export default SocialMediaButtons