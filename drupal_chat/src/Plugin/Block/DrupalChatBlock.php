<?php

namespace Drupal\drupal_chat\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a Drupal Chat block.
 *
 * @Block(
 *   id = "drupal_chat_block",
 *   admin_label = @Translation("Drupal Chat")
 * )
 */
class DrupalChatBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return [
      '#theme' => 'drupal_chat_block',
      '#attached' => [
        'library' => [
          'drupal_chat/chat',
        ],
        'drupalSettings' => [
          'drupal_chat' => [
            'endpoint' => 'http://eintelligent-003-site16.qtempurl.com/api/drupal-ai/ask',
          ],
        ],
      ],
    ];
  }

}
