import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid, Paper } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <div style={{ backgroundColor: '#E0DDD6', minHeight: '100vh' }}>
      {/* AppBar */}
      <AppBar position="static" style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #333333' }}>
      <Toolbar>
        {/* Logo */}
        <Box component="img" src="logo.svg" alt="Cornell Data Strategy Logo" sx={{ height: 40, marginRight: 2 }} />

        {/* Title */}
        <Typography variant="h6" style={{ flexGrow: 1, color: '#333333' }}>
          Cornell Data
        </Typography>

        {/* Navigation Buttons */}
        <Button color="inherit" style={{ color: '#333333' }}>About</Button>
        <Button color="inherit" style={{ color: '#333333' }}>Contact</Button>
        <Button variant="contained" href='https://docs.google.com/forms/d/e/1FAIpQLSencB7ERcHEKmd80SMZuUKJJNnMUtS-ZYCmWHRnNakLm_YeMw/viewform?usp=sf_link' style={{ backgroundColor: '#6562F5', color: '#E0DDD6' }}>Apply</Button>
      </Toolbar>
    </AppBar>

      {/* Main Content */}
      <Container maxWidth="md" style={{ marginTop: '4rem', textAlign: 'center', color: '#333333' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={isMobile ? 12 : 2}>
            <Box
              sx={{
                width: 64,
                height: 64,
                backgroundColor: '#333333',
                marginBottom: 2,
                marginLeft: isMobile ? 'auto' : 'inherit',
                marginRight: isMobile ? 'auto' : 'inherit',
              }}
            />
            <Box
              sx={{
                width: 64,
                height: 64,
                backgroundColor: '#333333',
                marginBottom: 2,
                marginLeft: isMobile ? 'auto' : 'inherit',
                marginRight: isMobile ? 'auto' : 'inherit',
              }}
            />
          </Grid>
          <Grid item xs={isMobile ? 12 : 8}>
            <Typography variant="h3" component="h1" gutterBottom style={{ fontWeight: 'bold', color: '#333333' }}>
              Bridging Data Insights with Strategic Execution.
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph style={{ color: '#333333' }}>
              At Cornell Data Strategy, we are dedicated to enhancing decision-making through data-driven insights, helping clients achieve their strategic goals.
              Focused on actionable intelligence, we decipher complex data to provide clear, significant insights that support informed decisions and strategic success.
            </Typography>
            <Button variant="contained" size="large" href="#" style={{ backgroundColor: '#6562F5', color: '#E0DDD6' }}>
              Get Started ↗
            </Button>
          </Grid>
          <Grid item xs={isMobile ? 12 : 2}>
            <Box
              sx={{
                width: 64,
                height: 64,
                backgroundColor: '#333333',
                marginBottom: 2,
                marginLeft: isMobile ? 'auto' : 'inherit',
                marginRight: isMobile ? 'auto' : 'inherit',
              }}
            />
            <Box
              sx={{
                width: 64,
                height: 64,
                backgroundColor: '#333333',
                marginBottom: 2,
                marginLeft: isMobile ? 'auto' : 'inherit',
                marginRight: isMobile ? 'auto' : 'inherit',
              }}
            />
          </Grid>
        </Grid>
        <Typography variant="caption" display="block" gutterBottom style={{ marginTop: '1rem', color: '#333333' }}>
          This organization is a registered student organization of Cornell University
        </Typography>
      </Container>

      {/* Scrolling Banner */}
      <Box py={2} style={{ backgroundColor: '#6562F5', color: '#E0DDD6', textAlign: 'center' }}>
        <Typography variant="body1">
          Cornell Data Strategy &nbsp;&nbsp;&nbsp; Cornell Data Strategy &nbsp;&nbsp;&nbsp; Cornell Data Strategy
        </Typography>
      </Box>

      {/* What we do Section */}
      <Container maxWidth="md" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Typography variant="h4" component="h2" gutterBottom style={{ color: '#333333' }}>
          What we do?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: '1rem', minHeight: '150px', backgroundColor: '#E0DDD6' }}>
              <Typography variant="h6" style={{ color: '#333333' }}>
                Predictive modeling & market research
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: '1rem', minHeight: '150px', backgroundColor: '#E0DDD6' }}>
              <Typography variant="h6" style={{ color: '#333333' }}>
                Product development and strategy
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3} style={{ padding: '1rem', minHeight: '150px', backgroundColor: '#E0DDD6' }}>
              <Typography variant="h6" style={{ color: '#333333' }}>
                Data analytics & corporate advisory
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Our Strategy Section */}
      <Container maxWidth="md" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Typography variant="h5" component="h2" gutterBottom style={{ color: '#333333' }}>
          Our Strategy: From Data to Business Transformation
        </Typography>
        <Box
          component="img"
          src={isMobile ? '/mobile.svg' : '/home.svg'}
          alt="Our Strategy"
          style={{ marginTop: '2rem', maxWidth: '100%' }}
        />
      </Container>



      <section style={{ backgroundColor: '#E0DDD6', padding: '4rem 0', color: '#333333' }}>
  <Container maxWidth="md" style={{ textAlign: 'center' }}>
    <Typography variant="h4" component="h2" gutterBottom>
      About Cornell Data Strategy
    </Typography>
    <Typography variant="body1" paragraph>
      We are excited to propose the formation of Cornell Data Strategy, a student organization
      dedicated to merging the discipline of data science and business consulting. Our aim is to offer
      actionable insights and forecasts, empowering local businesses and the Cornell campus to make
      informed, data-driven decisions. This initiative arises from a recognized need for a systematic
      approach to business challenges, combining thorough analysis with practical business strategies
      to address real-world problems effectively.
    </Typography>
  </Container>
</section>





<section style={{ backgroundColor: '#6562F5', padding: '4rem 0', color: '#E0DDD6' }}>
  <Container maxWidth="md" style={{ textAlign: 'center' }}>
    <Typography variant="h4" component="h2" gutterBottom>
      Club Description
    </Typography>
    <Typography variant="body1" paragraph>
      We seek to create a dynamic platform where students can apply their analytical skills and
      business acumen to real-world challenges. By establishing this club, we aim to fill a gap in the
      current extracurricular landscape, offering unique opportunities for students to engage in hands-on
      consulting projects, participate in enriching educational events, and contribute to cutting-edge
      research in various industries.
    </Typography>
  </Container>
</section>




<section style={{ backgroundColor: '#333333', padding: '4rem 0', color: '#E0DDD6' }}>
  <Container maxWidth="md" style={{ textAlign: 'center' }}>
    <Typography variant="h4" component="h2" gutterBottom>
      Industry Focus
    </Typography>
    <Typography variant="body1" paragraph>
      Our research and consulting efforts will initially focus on sectors where data strategy can
      significantly impact business outcomes. These industries have been selected for their dynamic
      nature and the substantial opportunities they present for impactful data-driven solutions:
    </Typography>
    <Typography variant="body1" component="ul" style={{ textAlign: 'left' }}>
      <li>Technology, Media, and Telecommunication</li>
      <li>Healthcare</li>
      <li>B2C services</li>
      <li>Financial Services</li>
    </Typography>
  </Container>
</section>



<section style={{ backgroundColor: '#E0DDD6', padding: '4rem 0', color: '#333333' }}>
  <Container maxWidth="md" style={{ textAlign: 'center' }}>
    <Typography variant="h4" component="h2" gutterBottom>
      Our Values
    </Typography>
    <Typography variant="body1" paragraph>
      At Cornell Data Strategy, we are driven by the following core values:
    </Typography>
    <Typography variant="body1" component="ul" style={{ textAlign: 'left' }}>
      <li>Clear, effective communication</li>
      <li>Innovative approach</li>
      <li>Integrity</li>
    </Typography>
  </Container>
</section>



<section style={{ backgroundColor: '#6562F5', padding: '4rem 0', color: '#E0DDD6' }}>
  <Container maxWidth="md" style={{ textAlign: 'center' }}>
    <Typography variant="h4" component="h2" gutterBottom>
      What Makes Us Unique?
    </Typography>
    <Typography variant="body1" paragraph>
      We offer a unique blend of industry-specific insights, tailored services for small businesses and
      Cornell startups, and a commitment to sustainability. Here's how:
    </Typography>
    <Typography variant="body1" component="ul" style={{ textAlign: 'left' }}>
      <li><strong>Industry-specific:</strong> We provide specialized tracks within high-demand industries such as biotechnology, fintech, or digital media to allow our members to gain deep, industry-specific knowledge that prepares them for their career pursuit.</li>
      <li><strong>Tailored for small businesses and Cornell startups:</strong> We recognize that local businesses and Cornell’s startup ecosystem often lack the resources to hire large consulting firms or develop in-house data analytics capabilities. This organization will provide tailored analytics solutions, crucial but often out of reach for these organizations.</li>
      <li><strong>Sustainability analytics lab:</strong> We address sector-specific issues like waste management optimization and carbon footprint analysis and extend to broader projects that integrate community and university involvement.</li>
    </Typography>
  </Container>
</section>



<section style={{ backgroundColor: '#E0DDD6', padding: '4rem 0', color: '#333333' }}>
  <Container maxWidth="md" style={{ textAlign: 'center' }}>
    <Typography variant="h4" component="h2" gutterBottom>
      Organizational Structure
    </Typography>
    <Typography variant="body1" paragraph>
      Our organization is structured to ensure effective leadership and smooth operations:
    </Typography>
    <Typography variant="body1" component="ul" style={{ textAlign: 'left' }}>
      <li><strong>President:</strong> Chris Wang</li>
      <li><strong>Vice-president:</strong> Alex Stöllinger</li>
      <li><strong>Treasurer:</strong> Ahmed Abdulla</li>
      <li><strong>Business Development Director:</strong> Viktor Stöllinger</li>
      <li><strong>Director of Recruitment:</strong> Michael Raybetz</li>
      <li><strong>Diversity, Equity, and Inclusion Director:</strong> Carey Manwa</li>
    </Typography>
    <Typography variant="body1" paragraph>
      In addition to the executive board, we have project leads and associates/analysts who play crucial roles in our consulting and research initiatives.
    </Typography>
  </Container>
</section>



    </div>
  );
}

export default App;
