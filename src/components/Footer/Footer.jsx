import { Grid } from "@mui/material";

export const Footer = () => {
  return (
    <footer>
        <Grid className='bg-indigo-600 text-center place-content-center py-6 mt-10' container>
            <Grid item xs={12} sm={6} md={3} className="text-white">
              <h3 className='pb-2 text-xl font-bold'>Company</h3>
              <ul className="text-sm">
                <li className="pb-2"><a href="#">About</a></li>
                <li className="pb-2"><a href="#">Services</a></li>
                <li className="pb-2"><a href="#">Blog</a></li>
                <li className="pb-2"><a href="#">Jobs</a></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="text-white">
              <h3 className='pb-2 text-xl font-bold'>Solutions</h3>
              <ul className="text-sm">
                <li className="pb-2"><a href="#">Web Development</a></li>
                <li className="pb-2"><a href="#">Design</a></li>
                <li className="pb-2"><a href="#">Automation</a></li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className="text-white">
              <h3 className='pb-2 text-xl font-bold'>Documentation</h3>
              <ul className="text-sm">
                <li className="pb-2"><a href="#">API</a></li>
                <li className="pb-2"><a href="#">Guides</a></li>
              </ul>
            </Grid>
            <Grid item className="pt-10 text-white" xs={12}>
              <p className="text-sm">&copy; 2024, All rights reserved.</p>
              <p className="text-sm">Made by devBenja</p>
            </Grid>
        </Grid>
    </footer>
  ) 
}
