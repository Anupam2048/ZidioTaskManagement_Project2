import React from 'react';

const Features = () => {
    const features = [
        { title: "Task Assignment and Prioritization", description: "Assign tasks to team members with clear deadlines and priority levels." },
        { title: "Deadline Tracking and Notifications", description: "Set task deadlines and receive automated reminders to stay on schedule." },
        { title: "Progress Reporting", description: "Generate reports on task completion and performance for better decision-making." },
        { title: "Role-Based Permissions", description: "Control access levels by assigning roles like Admin, Editor, or Viewer to team members." },
        { title: "Real-Time Collaboration", description: "Add comments, share files, and discuss tasks within the platform for seamless teamwork." },
        { title: "Secure Authentication and Authorization", description: "Ensure only verified users can access the platform using secure login (authentication)." }
    ];

    return (
        <section style={{ padding: '20px', backgroundColor: '#121212', borderRadius: '8px', margin: '20px auto', maxWidth: '800px' }}>
            <h2 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>Key Features</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {features.map((feature, index) => (
                    <div key={index} style={{ backgroundColor: '#1a1a1a', padding: '15px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                        <h3 style={{ color: '#fff', marginBottom: '10px' }}>{feature.title}</h3>
                        <p style={{ color: '#ccc' }}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
