import React from 'react';

interface AchievementCardProps {
    iconSrc: string;
    title: string;
    description: string;
    teamMembers?: string[];
}

const AchievementCard: React.FC<AchievementCardProps> = ({ iconSrc, title, description, teamMembers }) => {
    return (
        <div
            className="max-w-md bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            {/* Image Section */}
            <img
                src={iconSrc}
                alt="Post Image"
                className="w-full h-48 object-cover"
            />

            {/* Content Section */}
            <div className="p-5">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                {teamMembers && (
                    <p className="text-sm text-gray-500 mt-2">
                        <strong className="font-semibold text-gray-700">Team Members:</strong>{' '}
                        {teamMembers.join(', ')}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AchievementCard;
