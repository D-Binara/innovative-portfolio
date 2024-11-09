import React from 'react';

interface AchievementCardProps {
    iconSrc: string;
    title: string;
    description: string;
    teamMembers?: string[];
}

const AchievementCard: React.FC<AchievementCardProps> = ({ iconSrc, title, description, teamMembers }) => {
    return (
        <div className="flex items-center space-x-3">
            <img src={iconSrc} alt="Award Icon" className="w-10 h-10" />
            <div>
                <p className="text-lg font-medium">{title}</p>
                <p className="text-gray-700">{description}</p>
                {teamMembers && (
                    <p className="text-sm text-gray-600 mt-2">
                        <strong>Team Members:</strong> {teamMembers.join(', ')}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AchievementCard;
