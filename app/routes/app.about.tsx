import {
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export default function AboutPage() {
  return (
    <Page>
      <TitleBar title="About Page" />
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="300">
              <Text as="p" variant="bodyMd">
                Introducing RipeMetrics AI Chatbot, the ultimate customer
                engagement tool designed to seamlessly integrate into any
                website. Our AI-driven chatbot offers personalized solutions,
                product suggestions, and support for all your customer needs,
                ensuring an exceptional experience without the need for live
                assistance. With instant deployment and user-friendly
                customization, RipeMetrics AI Chatbot empowers your business to
                enhance customer satisfaction and streamline operations
                effortlessly. To learn more about RipeMetrics AI Chatbot, visit{" "}
                <Link
                  url="https://www.ripemetrics.com"
                  target="_blank"
                  // removeUnderline
                >
                  RipeMetrics
                </Link>
                .
              </Text>
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">
                Resources
              </Text>
              <List>
                <List.Item>
                  <Link
                    url="https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav"
                    target="_blank"
                    removeUnderline
                  >
                    App nav best practices
                  </Link>
                </List.Item>
              </List>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
